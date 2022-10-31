package com.ssafy.nolmung.image.controller;

import com.ssafy.nolmung.image.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @PostMapping("/board/{boardId}")
    public ResponseEntity uploadBoardImage(@PathVariable int boardId, @RequestParam List<MultipartFile> files) {
        HashMap<String, List<String>> map = new HashMap<>();
        List<String> result = new ArrayList<>();
        result = imageService.uploadBoardImages(boardId, files);
        map.put("imgUrl", result);
        return new ResponseEntity(map, HttpStatus.OK);
    }


}
