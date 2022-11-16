package com.ssafy.nolmung.walk.service;

import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;
import com.ssafy.nolmung.walk.dto.response.WalkPuppyListResponseDto;

import java.time.LocalDate;
import java.util.List;

public interface WalkService {
    List<WalkPuppyListResponseDto> getWalkPuppyList(int userId, LocalDate walkDate);


    void insertWalkRecord(WalkRecordRequestDto walkRecordRequestDto);

    double getWalkAttainment(int walkDistance);
}
