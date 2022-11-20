package com.ssafy.nolmung.walk.service;

import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;
import com.ssafy.nolmung.walk.dto.TimeDto;
import com.ssafy.nolmung.walk.dto.response.DailyStatisticsResponseDto;
import com.ssafy.nolmung.walk.dto.response.WalkDailyRecordListResponseDto;
import com.ssafy.nolmung.walk.dto.response.WalkPuppyListResponseDto;
import com.ssafy.nolmung.walk.dto.response.WalkRecordDetailResponseDto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface WalkService {
    List<WalkPuppyListResponseDto> getWalkPuppyList(int userId, LocalDate walkDate);

    List<WalkDailyRecordListResponseDto> getWalkRecordList(int puppyId, LocalDate walkDate);

    List<Integer> insertWalkRecord(WalkRecordRequestDto walkRecordRequestDto);

    long calWalkSecTime(LocalDateTime startTime, LocalDateTime endTime);

    TimeDto changeSecToTime(long allSec);

    WalkRecordDetailResponseDto getWalkRecord(int walkId);

    DailyStatisticsResponseDto getStatistics(int puppyId);

}
