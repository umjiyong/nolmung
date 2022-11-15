package com.ssafy.nolmung.walk.controller;

import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoUpdateRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyUserRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;
import com.ssafy.nolmung.puppy.service.PuppyService;
import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    @ApiOperation(value = "산책 정보 기록하기", notes = "산책 종료시, front의 data를 통해 산책 정보를 기록하는 API")
    @PostMapping
    public ResponseEntity createWalkRecord(@RequestBody WalkRecordRequestDto walkRecordRequestDto){
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
//    public ResponseEntity ex2(){
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
//    public ResponseEntity ex3(){
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
