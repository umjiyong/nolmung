package com.ssafy.nolmung.global.util;

import com.ssafy.nolmung.board.domain.BoardImage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


public class Util {

    @Component
    public class ImageUtil {

        @Value("{S3.URL}")
        private String uploadPath;

        public String uploadImage(String folderName, MultipartFile file) {
            if(file.isEmpty() || !file.getContentType().startsWith("image")){
                return null; // 에러 처리 필요
            }

            String fileName = UUID.randomUUID().toString();
            String originFileName = file.getOriginalFilename();
            fileName += originFileName.substring(originFileName.lastIndexOf("."));

            File f = new File(fileName);
            try {
                file.transferTo(f);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            String result = uploadPath+"/"+folderName+"/"+fileName;
            return result;
        }

    }

}
