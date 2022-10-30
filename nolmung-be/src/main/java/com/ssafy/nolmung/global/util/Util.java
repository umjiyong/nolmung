package com.ssafy.nolmung.global.util;

import com.ssafy.nolmung.board.domain.BoardImage;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class Util {

    static class ImageUtil {

        private String uploadPath;

        public List<String> uploadBoardImages(int boardId, List<MultipartFile> files) {

            List<String> result = new ArrayList<>();
            for (MultipartFile file : files) {
                if(file.isEmpty() || !file.getContentType().startsWith("image")){
                    return null; // 에러 처리 필요
                }

                String fileName = UUID.randomUUID().toString();
                String originFileName = file.getOriginalFilename();
                fileName += originFileName.substring(originFileName.lastIndexOf("."));

                File f = new File(fileName);
                // 에러 처리 필요
                try {
                    file.transferTo(f);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }

                result.add(uploadPath+"/"+fileName);
            }

            return result;
        }



    }

}
