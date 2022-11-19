package com.ssafy.nolmung.landMark.controller;

import com.ssafy.nolmung.landMark.dto.request.LandMarkUserRequestDto;
import com.ssafy.nolmung.landMark.dto.request.UserLocationRequestDto;
import com.ssafy.nolmung.landMark.dto.response.*;
import com.ssafy.nolmung.landMark.dto.service.LandMarkService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/landmark")
@RequiredArgsConstructor
public class LandMarkController {

    private final LandMarkService landMarkService;

    @ApiOperation(value = "랜드마크 상세 조회", notes = "랜드마크 정보와 좋아요 여부를 반환하는 API")
    @PostMapping
    public ResponseEntity getLandmarkInfo(@RequestBody LandMarkUserRequestDto landMarkUserRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        LandMarkInfoResponseDto landmarkInfo;
        try {
            landmarkInfo = landMarkService.getLandmarkInfo(landMarkUserRequestDto.getLandmarkId(), landMarkUserRequestDto.getUserId());
            result.put("landmarkInfo", landmarkInfo);
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 상세 조회");
            result.put("landmarkId", landMarkUserRequestDto.getLandmarkId());
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "랜드마크 방문자 목록 조회", notes = "")
    @GetMapping("/visit/{landmarkId}")
    public ResponseEntity getVisitorList(@PathVariable int landmarkId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            List<VisitorListResponseDto> visitorList = landMarkService.getVisitorList(landmarkId);
            result.put("message", "success");
            result.put("visitorList", visitorList);
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 방문자 목록 조회");
            result.put("landmarkId", landmarkId);
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "랜드마크 방명록 목록 조회", notes = "랜드마크 상세 페이지 내의 방명록 목록을 조회하는 API")
    @GetMapping("/boardList/{landmarkId}")
    public ResponseEntity getLandmarkBoardList(@PathVariable int landmarkId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            List<LandMarkBoardListDto> landmarkBoardList = landMarkService.getLandmarkBoardList(landmarkId);
            result.put("landmarkBoardList", landmarkBoardList);
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 방명록 목록 조회");
            result.put("landmarkId", landmarkId);
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "랜드마크 마커 전체 목록 조회", notes = "랜드마크 전체의 정보를 조회하는 API")
    @GetMapping("/list")
    public ResponseEntity getLandmarkList(){
        HashMap<String, Object> result = new HashMap<>();
        List<LandMarkListResponseDto> landmarkList = new ArrayList<>();
        try {
            landmarkList = landMarkService.getLandmarkList();
            result.put("message", "success");
            result.put("landmarkList", landmarkList);
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 마커 목록 조회");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "내 근처 랜드마크 마커 목록 조회", notes = "근처 랜드마크의 정보를 조회하는 API")
    @PostMapping("/nearList")
    public ResponseEntity getNearLandmarkList(@RequestBody UserLocationRequestDto userLocationRequestDto){
        HashMap<String, Object> result = new HashMap<>();
        List<LandMarkListResponseDto> landmarkList = new ArrayList<>();
        try {
            landmarkList = landMarkService.getNearLandmarkList(userLocationRequestDto.getUserLat(), userLocationRequestDto.getUserLon());
            result.put("message", "success");
            result.put("landmarkList", landmarkList);
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - 랜드마크 마커 목록 조회");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


}
