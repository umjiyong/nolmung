package com.ssafy.nolmung.walk.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/walkStatistics")
@RequiredArgsConstructor
public class WalkStatisticsController {

    @ApiOperation(value = "일별 산책 통계 조회", notes = "월~일 까지의 산책량 통계를 조회하는 API")
    @PostMapping("/daily/{puppyId}")
    public ResponseEntity getDailyStatistics(@PathVariable int puppyId){
        HashMap<String, Object> result = new HashMap<>();
        try {

            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - ");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "주별 산책 통계 조회", notes = "해당 월의 산책량 통계를 주별로 반환하는 API")
    @PostMapping("/weekly/{puppyId}")
    public ResponseEntity getWeeklyStatistics(@PathVariable int puppyId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - ");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "월별 산책 통계 조회", notes = "해당 년도의 산책량을 월별로 반환하는 API")
    @PostMapping("/monthly/{puppyId}")
    public ResponseEntity getMonthlyStatistics(@PathVariable int puppyId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("message", "[error] - ");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }
}
