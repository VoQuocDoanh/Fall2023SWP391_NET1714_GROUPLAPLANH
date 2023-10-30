package com.example.demo.service;

import com.google.api.gax.paging.Page;
import com.google.cloud.storage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class GoogleCloudService {

    @Value("${gcp.bucket.name}")
    private String bucketName;

    @Autowired
    Storage storage;

    private String generateCode(Long id, String type, String demo) {
        if(demo.equals("full")) {
            String input = id + "-" + type;
            return URLEncoder.encode(input, StandardCharsets.UTF_8);
        }
        String input = id + "-" + type + "-" + demo;
        return URLEncoder.encode(input, StandardCharsets.UTF_8);
    }

    public List<String> listOfFiles() {

        List<String> list = new ArrayList<>();
        Page<Blob> blobs = storage.list(bucketName);
        for (Blob blob : blobs.iterateAll()) {
            list.add(blob.getName());
        }
        return list;
    }

    public String uploadFile(MultipartFile file, Long id, String typeFile, String demo) {
        try {
        //set up enviroment
        String fileName = generateCode(id, typeFile, demo);
        String path = typeFile + "/";
        //upload to bucket
        BlobId blobId = BlobId.of(bucketName, path + fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                .setContentType(file.getContentType())
                .setAcl(Collections.singletonList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER)))
                .build();
            Blob blob = storage.create(blobInfo, file.getBytes());
            return "https://storage.googleapis.com/" + bucketName + "/" + path + fileName;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void updateFile(MultipartFile file, String objectName){
        try {
            Blob blob = storage.get(bucketName, objectName);
            BlobId blobId = BlobId.of(bucketName, objectName);
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                    .setContentType(file.getContentType())
                    .setAcl(Collections.singletonList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER)))
                    .build();
            storage.create(blobInfo, file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
