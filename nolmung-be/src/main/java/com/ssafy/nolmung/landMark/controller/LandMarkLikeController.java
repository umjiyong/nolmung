package com.ssafy.nolmung.landMark.controller;

import com.ssafy.nolmung.landMark.dto.request.LandMarkUserRequestDto;
import com.ssafy.nolmung.landMark.dto.service.LandMarkLikeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/landmark/like")
@RequiredArgsConstructor
public class LandMarkLikeController {

    private final LandMarkLikeService landMarkLikeService;

    @ApiOperation(value = "랜드마크 좋아요 등록", notes = "userId, landmarkId로 좋아하는 랜드마크를 등록하는 API")
    @PostMapping
    public ResponseEntity likeLandMark(@RequestBody LandMarkUserRequestDto landMarkUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            landMarkLikeService.likeLandmark(landMarkUserRequestDto.getUserId(), landMarkUserRequestDto.getLandmarkId());
            result.put("message", "success");
            result.put("userId", landMarkUserRequestDto.getUserId());
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 좋아요 등록");
            result.put("userId", landMarkUserRequestDto.getUserId());
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "랜드마크 좋아요 취소", notes = "userId, landmarkId로 좋아하는 랜드마크에서 해제하는 API")
    @DeleteMapping
    public ResponseEntity deleteLandmarkLike(@RequestBody LandMarkUserRequestDto landMarkUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            landMarkLikeService.cancelLikeLandmark(landMarkUserRequestDto.getUserId(), landMarkUserRequestDto.getLandmarkId());
            result.put("message", "success");
            result.put("landmarkId", landMarkUserRequestDto.getLandmarkId());
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 좋아요 취소");
            result.put("landmarkId", landMarkUserRequestDto.getLandmarkId());
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


}
