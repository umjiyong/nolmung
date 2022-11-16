package com.ssafy.nolmung.walk.controller;

import com.ssafy.nolmung.walk.dto.request.WalkPuppyListRequestDto;
import com.ssafy.nolmung.walk.dto.response.WalkPuppyListResponseDto;
import com.ssafy.nolmung.walk.service.WalkService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/walk")
@RequiredArgsConstructor
public class WalkController {

    @Autowired
    WalkService walkService;

//    @ApiOperation(value = "산책 정보 기록하기", notes = "산책 종료시, front의 data를 통해 산책 정보를 기록하는 API")
//    @PostMapping
//    public ResponseEntity createWalkRecord(@RequestBody WalkRecordRequestDto walkRecordRequestDto){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//            result.put("message", "success");
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            result.put("message", "[error] - ");
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }

    @ApiOperation(value = "산책 일자별 강아지 목록 조회", notes = "산책 일자 data 정보를 통해, 해당 일에 산책한 강아지의 목록을 조회하는 API")
    @PostMapping("/puppyList")
    public ResponseEntity getWalkPuppyList(@RequestBody WalkPuppyListRequestDto walkPuppyListRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            List<WalkPuppyListResponseDto> puppyList = walkService.getWalkPuppyList(walkPuppyListRequestDto.getUserId(), walkPuppyListRequestDto.getWalkDate());
            result.put("puppyList", puppyList);
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("userId", walkPuppyListRequestDto.getUserId());
            result.put("message", "[error] - 산책 일자별 강아지 목록 조회");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "일일 산책 목록 조회", notes = "puppyId와 date를 통해 특정 강아지의 일일 산책 목록을 조회하는 API")
    @PostMapping("/dailyRecordList")
    public ResponseEntity getDailyWalkRecordList(){
        HashMap<String, Object> result = new HashMap<>();
        try {
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - ");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

//    @ApiOperation(value = "", notes = "")
//    @DeleteMapping
//    public ResponseEntity ex4(){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//            result.put("message", "success");
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            result.put("message", "[error] - ");
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    @ApiOperation(value = "", notes = "")
//    @DeleteMapping
//    public ResponseEntity ex5(){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//            result.put("message", "success");
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            result.put("message", "[error] - ");
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    @ApiOperation(value = "", notes = "")
//    @DeleteMapping
//    public ResponseEntity ex6(){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//            result.put("message", "success");
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            result.put("message", "[error] - ");
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    @ApiOperation(value = "", notes = "")
//    @DeleteMapping
//    public ResponseEntity ex7(){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//            result.put("message", "success");
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            result.put("message", "[error] - ");
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }
}
