package com.example.demo.implement;

import com.example.demo.service.IStorageService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class AudioServiceImpl implements IStorageService {
    private final Path storageFolder= Paths.get("uploads");

    public AudioServiceImpl(){
        try{
            Files.createDirectories(storageFolder);
        }catch (IOException exception){
            throw new RuntimeException("Cannot initialize storage",exception);
        }
    }

    private boolean isAudioFile(MultipartFile file){
        //let install FilenameUtils
        String fileExtension= FilenameUtils.getExtension(file.getOriginalFilename());
        return Arrays.asList(new String[]{"mp3,wma"}).contains(fileExtension.trim().toLowerCase());
    }
    @Override
    public String storeFile(MultipartFile file) {
        try{
            System.out.println("haha");
            if (file.isEmpty()){
                throw new RuntimeException("Fail to store empty file");
            }
            if (isAudioFile(file)){
                throw new RuntimeException("You can only post audio file");
            }
            float fileSizeInMegabytes=file.getSize()/1_000_000.0f;
            if (fileSizeInMegabytes>0.5f){
                throw new RuntimeException("File must be <=5Mb");
            }
            String fileExtendsion =FilenameUtils.getExtension(file.getOriginalFilename());
            String generatedFilename= UUID.randomUUID().toString().replace("-","");
            generatedFilename=generatedFilename+"."+fileExtendsion;
            Path destinationFilePath =this.storageFolder.resolve(
                    Paths.get(generatedFilename)).normalize().toAbsolutePath();
            if (!destinationFilePath.getParent().equals(this.storageFolder.toAbsolutePath())){
                throw new RuntimeException(
                        "Cannot store file outside current directory."
                );
            }
            try (InputStream inputStream=file.getInputStream()){
                Files.copy(inputStream,destinationFilePath, StandardCopyOption.REPLACE_EXISTING);
            }
            return generatedFilename;
        }catch (IOException exception){
            throw new RuntimeException("Cannot initialize storage",exception);
        }

    }

    @Override
    public Stream<Path> loadAll() {
        //list all file upload
        try{
            return Files.walk(this.storageFolder,1)
                    .filter(path -> !path.equals(this.storageFolder))
                    .map(this.storageFolder::relativize);
        }catch (IOException e){
            throw new RuntimeException("Fail to load store files",e);
        }
    }

    @Override
    public byte[] readFileContent(String fileName) {
        try{
            Path file=storageFolder.resolve(fileName);
            Resource resource=new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()){
                byte[] bytes= StreamUtils.copyToByteArray(resource.getInputStream());
                return bytes;
            }else{
                throw new RuntimeException("Could not read file: " + fileName);
            }

        }catch (IOException exception){
            throw new RuntimeException("Could not read file: "+fileName,exception);
        }
    }

    @Override
    public void deleteAllFiles() {

    }
}
