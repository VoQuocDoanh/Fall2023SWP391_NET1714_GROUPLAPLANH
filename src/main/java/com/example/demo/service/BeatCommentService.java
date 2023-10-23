package com.example.demo.service;

import com.example.demo.dto.CommentBeatResponseDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.BeatComment;
import com.example.demo.entity.User;
import com.example.demo.repository.BeatCommentRepository;
import com.example.demo.repository.BeatRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BeatCommentService {

    @Autowired
    BeatRepository beatRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    BeatCommentRepository commentRepository;
    public ResponseEntity<String> addComment(CommentBeatResponseDTO dto){

        Optional<Beat> beat= beatRepository.findById(dto.getBeatId());
        Optional<User> user=userRepository.findById(dto.getUserId());
        BeatComment parentComment = commentRepository.findParentCommentById(dto.getParentId());
            if (beat.isPresent() && user.isPresent()){
                BeatComment comment = new BeatComment(
                        dto.getContent(),
                        user.get(),
                        beat.get(),
                        parentComment,
                        1);
                commentRepository.save(comment);
                beat.get().setCmt(beat.get().getCmt() + 1);
                beatRepository.save(beat.get());
                return new ResponseEntity<>("Comment", HttpStatus.OK);

            }

        return new ResponseEntity<>("No comment", HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> updateComment(CommentBeatResponseDTO dto){
        Optional<BeatComment> comment = commentRepository.findById(dto.getId());
        if (comment.isPresent()){
            comment.get().setContent(dto.getContent());
            commentRepository.save(comment.get());
        }
        return new ResponseEntity<>("Updated!",HttpStatus.OK);
    }

    public ResponseEntity<String> deleteComment(CommentBeatResponseDTO dto){
        Optional<BeatComment> comment = commentRepository.findById(dto.getId());
        Optional<Beat> beat = beatRepository.findById(dto.getBeatId());
        if (comment.isPresent()){
            comment.get().setStatus(0);
            beat.get().setCmt(beat.get().getCmt() - 1);
            commentRepository.save(comment.get());
            beatRepository.save(beat.get());
        }
        return new ResponseEntity<>("Deleted!", HttpStatus.OK);
    }

    public List<CommentBeatResponseDTO> viewComment(Long id) {
        Optional<Beat> beatEntity = beatRepository.findById(id);
        if (beatEntity.isPresent()){
            List<BeatComment> list = commentRepository.findByBeatCommentAndParentCommentIsNull(beatEntity.get());
            if (!list.isEmpty()){
                List<CommentBeatResponseDTO> dtoList = new ArrayList<>();
                for (BeatComment entity: list){
                    CommentBeatResponseDTO dto = response(entity);
                    dtoList.add(dto);
                }
                return dtoList;
            }
            else return null;
        }else return null;
    }

    private CommentBeatResponseDTO response(BeatComment comment){
        if (comment.getStatus() == 1){
            CommentBeatResponseDTO commentBeatResponseDTO = new CommentBeatResponseDTO();
            commentBeatResponseDTO.setId(comment.getId());
            if (comment.getParentComment() != null)
                    commentBeatResponseDTO.setParentId(comment.getParentComment().getId());
            commentBeatResponseDTO.setContent(comment.getContent());
            commentBeatResponseDTO.setBeatId(comment.getBeatComment().getId());
            commentBeatResponseDTO.setUserId(comment.getUserCommentBeat().getId());
            commentBeatResponseDTO.setStatus(comment.getStatus());
            List<BeatComment> sub = commentRepository.findByParentComment(comment);
            List<CommentBeatResponseDTO> dtoList = new ArrayList<>();
            for (BeatComment subcmt:sub){
                CommentBeatResponseDTO subCommentResponse = response(subcmt);
                dtoList.add(subCommentResponse);
            }
            commentBeatResponseDTO.setSubComment(dtoList);
            return commentBeatResponseDTO;
        } else return  null;
    }
}
