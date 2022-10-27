package com.ssafy.nolmung.puppy.controller;

import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyUserRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;
import com.ssafy.nolmung.puppy.service.PuppyService;
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
@RequestMapping("/puppy")
@RequiredArgsConstructor
public class PuppyController {

    private final PuppyService puppyService;

    @ApiOperation(value = "강아지 정보 조회", notes = "puppyId로 강아지 정보 조회에 필요한 데이터를 받아오는 API")
    @GetMapping("/info/{puppyId}")
    public ResponseEntity getPuppyInfo(@PathVariable int puppyId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            PuppyInfoResponseDto puppy = puppyService.getPuppyInfo(puppyId);

            result.put("puppyInfo", puppy);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyId", puppyId);
            result.put("message", "[error] - 강아지 정보 조회");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "나의 강아지 목록 조회", notes = "우리집의 모든 강아지 목록을 조회하는 API")
    @GetMapping("/{userId}")
    public ResponseEntity getMyPuppyList(@PathVariable int userId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            List<PuppyListResponseDto> myPuppyList = puppyService.getMyPuppyList(userId);

            result.put("myPuppyList", myPuppyList);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("userId", userId);
            result.put("message", "[error] - 나의 강아지 목록 조회");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "강아지 코드로 검색", notes = "가족 간에 강아지 정보를 공유하기 위해, 강아지의 고유 코드를 통해 강아지를 검색하는 API")
    @GetMapping("/search")
    public ResponseEntity searchPuppyByCode(@PathVariable String puppyCode){
        HashMap<String, Object> result = new HashMap<>();
        try {
            PuppyListResponseDto myPuppy = puppyService.searchPuppyByCode(puppyCode);

            result.put("myPuppy", myPuppy);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyCode", puppyCode);
            result.put("message", "[error] - 강아지 코드로 검색");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "강아지 신규 등록", notes = "사용자가 입력한 강아지 정보로 새로운 강아지를 등록하는 API")
    @PostMapping("/register")
    public ResponseEntity insertPuppy(@RequestBody PuppyInfoRequestDto puppyInfoRequestDto){
        HashMap<String, Object> result = new HashMap<>();

        try {
            puppyService.insertPuppy(puppyInfoRequestDto);

            result.put("puppyName", puppyInfoRequestDto.getPuppyName());
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyName", puppyInfoRequestDto.getPuppyName());
            result.put("message", "[error] - 강아지 신규 등록");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "우리 강아지 코드로 검색해서 등록하기", notes = "가족 간의 강아지 정보 공유를 위한 강아지 등록 기능, puppyId를 통해 강아지 등록")
    @PostMapping
    public ResponseEntity registMyPuppy(@RequestBody PuppyUserRequestDto puppyUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


    @ApiOperation(value = "", notes = "")
    @PutMapping("")
    public ResponseEntity e6(){
        HashMap<String, Object> result = new HashMap<>();
        try {

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }
//
//    @ApiOperation(value = "", notes = "")
//    @DeleteMapping("")
//    public ResponseEntity ex7(){
//        HashMap<String, Object> result = new HashMap<>();
//        try {
//
//            return new ResponseEntity(result, HttpStatus.OK);
//        }catch (Exception e){
//            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
//        }
//    }

}
