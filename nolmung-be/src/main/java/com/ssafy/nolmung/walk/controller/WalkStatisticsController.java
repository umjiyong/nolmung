package com.ssafy.nolmung.walk.controller;

import com.ssafy.nolmung.walk.dto.response.DailyStatisticsResponseDto;
import com.ssafy.nolmung.walk.service.WalkService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/walkStatistics")
@RequiredArgsConstructor
public class WalkStatisticsController {

    @Autowired
    private final WalkService walkService;

    @ApiOperation(value = "일별 산책 통계 조회", notes = "월~일 까지의 산책량 통계를 조회하는 API")
    @GetMapping("/{puppyId}")
    public ResponseEntity getDailyStatistics(@PathVariable int puppyId){
        HashMap<String, Object> result = new HashMap<>();
        try {
            DailyStatisticsResponseDto data = walkService.getStatistics(puppyId);
            result.put("result", data);
            result.put("message", "success");
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("puppyId", puppyId);
            result.put("message", "[error] - 일별 산책 통계 조회");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

}
