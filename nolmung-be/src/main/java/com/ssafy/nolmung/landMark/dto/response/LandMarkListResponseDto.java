package com.ssafy.nolmung.landMark.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Comparator;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkListResponseDto {
    int landmarkId;
    double latitude;
    double longitude;
    double distance;

    @Builder
    public LandMarkListResponseDto(int landmarkId, double latitude, double longitude, double distance){
        this.landmarkId = landmarkId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.distance = distance;
    }

}
