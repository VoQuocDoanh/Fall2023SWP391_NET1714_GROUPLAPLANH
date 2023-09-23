package com.example.demo.controller;

import com.example.demo.entity.Beat;
import com.example.demo.response.ResponseObject;
import com.example.demo.service.FileUploadService;
import com.example.demo.service.IStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping(path = "/api/FileUpload")
public class FileUploadController {

    @Autowired
    private IStorageService storageService;

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping("")
    public ResponseEntity<ResponseObject> uploadFile(@RequestParam("file") MultipartFile file) {
        return fileUploadService.uploadFile(file);

    }


    //get audio's url
    @GetMapping("/files/{fileName:.+}")
    public ResponseEntity<byte[]> readDetailFile(@PathVariable String fileName) {
        return readDetailFile(fileName);
    }

    @GetMapping("")
    public ResponseEntity<List<String>> getUploadFiles() {
        return fileUploadService.getUploadFiles();
    }

}
