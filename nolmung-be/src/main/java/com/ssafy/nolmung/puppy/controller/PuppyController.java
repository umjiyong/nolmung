package com.ssafy.nolmung.puppy.controller;

import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoUpdateRequestDto;
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
import java.util.Map;

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
            List<Map<String, Object>> myPuppyList = puppyService.getMyPuppyList(userId);

            result.put("myPuppyList", myPuppyList);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("userId", userId);
            result.put("message", "[error] - 나의 강아지 목록 조회");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "강아지 코드로 검색", notes = "강아지 정보를 공유하기 위해, 강아지의 고유 코드를 통해 강아지를 검색하는 API")
    @PostMapping("/search")
    public ResponseEntity searchPuppyByCode(@RequestParam String puppyCode){
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

    @ApiOperation(value = "우리 강아지 정보를 공유받기", notes = "강아지 정보 공유를 위한 강아지 등록 기능, userId와 puppyId를 통해 기존의 강아지를 등록")
    @PostMapping
    public ResponseEntity registMyPuppy(@RequestBody PuppyUserRequestDto puppyUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            puppyService.shareAndRegisterMyPuppy(puppyUserRequestDto.getPuppyId(), puppyUserRequestDto.getUserId());

            result.put("puppyId", puppyUserRequestDto.getPuppyId());
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyId", puppyUserRequestDto.getPuppyId());
            result.put("message", "[error] - 강아지 코드로 등록");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "강아지 정보 수정하기", notes = "사용자가 입력한 값을 받아, 강아지의 프로필 정보를 수정할 수 있는 API")
    @PutMapping("/modify")
    public ResponseEntity updateMyPuppyInfo(@RequestBody PuppyInfoUpdateRequestDto puppyInfoUpdateRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {

            puppyService.updatePuppyInfo(puppyInfoUpdateRequestDto);

            result.put("puppyId", puppyInfoUpdateRequestDto.getPuppyId());
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyId", puppyInfoUpdateRequestDto.getPuppyId());
            result.put("message", "[error] - 강아지 정보 수정");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "강아지 정보 삭제", notes = "API 요청시 강아지와 연관되어있는 user가 없는 경우에만 강아지 정보 삭제")
    @DeleteMapping("/delete")
    public ResponseEntity deletePuppyInfo(@RequestBody PuppyUserRequestDto puppyUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        try {
            puppyService.deletePuppyInfo(puppyUserRequestDto.getPuppyId(), puppyUserRequestDto.getUserId());

            result.put("puppyId", puppyUserRequestDto.getPuppyId());
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("puppyId", puppyUserRequestDto.getPuppyId());
            result.put("message", "[error] - 강아지 정보 삭제");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

}
