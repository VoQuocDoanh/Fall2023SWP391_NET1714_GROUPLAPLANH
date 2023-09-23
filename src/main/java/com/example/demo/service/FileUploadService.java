package com.example.demo.service;

import com.example.demo.controller.FileUploadController;
import com.example.demo.entity.Beat;
import com.example.demo.response.ResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileUploadService {

    @Autowired
    private IStorageService storageService;


    public ResponseEntity<ResponseObject> uploadFile(MultipartFile file) {
        Beat beat = new Beat();
        try {
            //save files to a folder => use a service
            String generatedFileName = storageService.storeFile(file);
            //      beat.setBeatSound(generatedFileName);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "upload file successfully", generatedFileName)

            );


        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject("ok", exception.getMessage(), "")
            );
        }
    }

    public ResponseEntity<byte[]> readDetailFile(String fileName) {
        try {
            byte[] bytes = storageService.readFileContent(fileName);
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM).body(bytes);
        } catch (Exception exception) {
            return ResponseEntity.noContent().build();
        }
    }

    public ResponseEntity<List<String>> getUploadFiles() {
        try {
            List<String> urls = storageService.loadAll()
                    .map(path -> {
                        //convert fileName to url(send request "readDetailFile")
                        String urlPath = MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
                                        "readDetailFile", path.getFileName().toString())
                                .build().toUri().toString();
                        return urlPath;
                    }).collect(Collectors.toList());
            return ResponseEntity.ok((List<String>) new ResponseObject("", "", urls));
        } catch (Exception e) {
            return ResponseEntity.ok((List<String>) new ResponseObject("ok", "list failed", new String[]{}));
        }
    }
}
