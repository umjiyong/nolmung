package com.ssafy.nolmung.global.util;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@RequiredArgsConstructor
@Component
public class Util {

    @Component
    public class ImageUtil {

        @Autowired
        private AmazonS3Client amazonS3Client;
        @Value(("${S3.BUCKETNAME}"))
        private String bucketName;


        public String uploadImage(String folderName, MultipartFile file) {
            if(file.isEmpty() || !file.getContentType().startsWith("image")){
                return null; // 에러 처리 필요
            }

            String fileName = UUID.randomUUID().toString();
            String originFileName = file.getOriginalFilename();
            fileName += originFileName.substring(originFileName.lastIndexOf("."));
            fileName = folderName+"/"+fileName;

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType(file.getContentType());
            objectMetadata.setContentLength(file.getSize());

            try {
                amazonS3Client.putObject(new PutObjectRequest(bucketName, fileName, file.getInputStream(), objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
            } catch (IOException e) {
                return null; // 에러 처리 필요
            }

            String result = amazonS3Client.getUrl(bucketName, fileName).toString();
            return result;
        }

        public void deleteImage(String url) {
            File file = new File(url);
            file.delete();
        }
    }

}
