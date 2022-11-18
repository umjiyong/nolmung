package com.ssafy.nolmung.InAppAlarm.controller;

import com.ssafy.nolmung.InAppAlarm.dto.request.InAppAlarmRequest;
import com.ssafy.nolmung.InAppAlarm.dto.response.InAppAlarmResponse;
import com.ssafy.nolmung.InAppAlarm.service.InAppAlarmService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/inAppAlarm")
@RestController
public class InAppAlarmController {

    @Autowired
    InAppAlarmService inAppAlarmService;

    @PostMapping
    @ApiOperation(value = "알람 등록", notes = "특정 유저에게 보낼 알람을 등록하는 API")
    public ResponseEntity createAlarm(@RequestBody @Valid InAppAlarmRequest inAppAlarmRequest) {
        int result = inAppAlarmService.createInAppAlarm(inAppAlarmRequest);
        // result: 생성된 inAppAlarm의 id

        if(result<=0) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    @ApiOperation(value = "사용자 별 알람 조회", notes = "userId를 이용해 해당 사용자에게 온 알람 목록을 조회하는 API")
    public ResponseEntity getUserAlarm(@PathVariable int userId) {
        List<InAppAlarmResponse> result = inAppAlarmService.searchUserInAppAlarm(userId);

        if (result == null) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @PutMapping
    @ApiOperation(value = "알람 읽음 확인 처리", notes = "inAppAlarmId를 이용해 알람을 읽음 처리하는 API")
    public ResponseEntity updateReadAlarm(@RequestBody List<Integer> inAppAlarmIdList) {
        int result = inAppAlarmService.updateInAppAlaramRead(inAppAlarmIdList);
        if (result<=0) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }
}
