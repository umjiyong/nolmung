package com.ssafy.nolmung.image.controller;

import com.ssafy.nolmung.image.service.ImageService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RequestMapping("/image")
@RestController
public class ImageController {

    @Autowired
    ImageService imageService;

    @PostMapping(value="/board/{boardId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadBoardImage(@PathVariable int boardId, @RequestPart("files") List<MultipartFile> files) {
        HashMap<String, List<String>> map = new HashMap<>();
        List<String> result = new ArrayList<>();
        result = imageService.uploadBoardImages(boardId, files);
        map.put("imgUrl", result);
        return new ResponseEntity(map, HttpStatus.OK);
    }

    @ApiOperation(value = "강아지 이미지 업로드", notes = "이미지의 url을 통해 S3에 이미지를 업로드하는 API")
    @PostMapping(value="/puppy/{puppyId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadPuppyImage(@PathVariable int puppyId, @RequestPart("files") MultipartFile file) {
        HashMap<String, Object> result = new HashMap<>();
        String imageUrl;

        try {
            imageUrl = imageService.uploadPuppyImage(puppyId, file);
            result.put("message", "success");
            result.put("puppyImgUrl", imageUrl);
            result.put("puppyId", puppyId);
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 강아지 이미지 업로드 오류");
            result.put("puppyId", puppyId);
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


}
