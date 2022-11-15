package com.ssafy.nolmung.walk.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkRecordRequestDto {
    int userId;

    List<Integer> puppyIdList;

    LocalDateTime walkStartTime;

    LocalDateTime walkEndTime;

    double walkDistance;

    String walkUserImg;


    @Builder
    public WalkRecordRequestDto(int userId,
                                List<Integer> puppyIdList,
                                LocalDateTime walkStartTime,
                                LocalDateTime walkEndTime,
                                double walkDistance,
                                String walkUserImg){
        this.userId = userId;
        this.puppyIdList = puppyIdList;
        this.walkStartTime = walkStartTime;
        this.walkEndTime = walkEndTime;
        this.walkDistance = walkDistance;
        this.walkUserImg = walkUserImg;
    }
}
