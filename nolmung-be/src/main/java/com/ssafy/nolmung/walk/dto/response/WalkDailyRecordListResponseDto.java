package com.ssafy.nolmung.walk.dto.response;

import com.ssafy.nolmung.walk.dto.TimeDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkDailyRecordListResponseDto {
    int walkId;
    double walkDistance;
    TimeDto walkTime;
    double walkAttainment;

    @Builder
    public WalkDailyRecordListResponseDto(int walkId, double walkDistance, TimeDto walkTime, double walkAttainment){
        this.walkId = walkId;
        this.walkDistance = walkDistance;
        this.walkTime = walkTime;
        this.walkAttainment = walkAttainment;
    }
}
