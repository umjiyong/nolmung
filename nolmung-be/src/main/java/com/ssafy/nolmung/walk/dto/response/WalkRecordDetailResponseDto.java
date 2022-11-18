package com.ssafy.nolmung.walk.dto.response;

import com.ssafy.nolmung.walk.dto.TimeDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkRecordDetailResponseDto {
    double distance;
    TimeDto walkTime;
    double walkAttainment;
    String walkImg;
    String userUploadImg;

    @Builder
    public WalkRecordDetailResponseDto(double distance, TimeDto walkTime, double walkAttainment, String walkImg, String userUploadImg){
        this.distance = distance;
        this.walkTime = walkTime;
        this.walkAttainment = walkAttainment;
        this.walkImg = walkImg;
        this.userUploadImg = userUploadImg;
    }
}
