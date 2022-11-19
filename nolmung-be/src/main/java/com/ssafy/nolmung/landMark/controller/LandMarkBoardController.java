package com.ssafy.nolmung.landMark.controller;

import com.ssafy.nolmung.landMark.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMark.dto.response.*;
import com.ssafy.nolmung.landMark.dto.service.LandMarkBoardService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/landmark/board")
@RequiredArgsConstructor
public class LandMarkBoardController {

    private final LandMarkBoardService landMarkBoardService;


    @ApiOperation(value = "랜드마크 방명록 등록", notes = "랜드마크에 방명록을 작성하는 API")
    @PostMapping
    public ResponseEntity createLandmarkBoard(@RequestBody LandmarkBoardRequestDto landmarkBoardRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            landMarkBoardService.createLandmarkBoard(landmarkBoardRequestDto);
            result.put("message", "success");
            result.put("userId", landmarkBoardRequestDto.getUserId());
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 방명록 등록");
            result.put("userId", landmarkBoardRequestDto.getUserId());
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "랜드마크 방명록 게시글 조회", notes = "랜드마크 게시글 한개를 조회하여 내용을 확인하는 API")
    @GetMapping("/{landmarkBoardId}")
    public ResponseEntity getLandmarkBoardInfo(@PathVariable int landmarkBoardId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            LandMarkBoardInfoDto landmarkBoardInfo = landMarkBoardService.getLandmarkBoardInfo(landmarkBoardId);
            result.put("landmarkBoardInfo", landmarkBoardInfo);
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 방명록 게시글 조회");
            result.put("landmarkBoardId", landmarkBoardId);
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


}
