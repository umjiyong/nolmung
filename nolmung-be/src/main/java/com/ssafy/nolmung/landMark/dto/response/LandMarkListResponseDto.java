package com.ssafy.nolmung.landMark.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkListResponseDto {
    int landmarkId;
    double latitude;
    double longitude;

    @Builder
    public LandMarkListResponseDto(int landmarkId, double latitude, double longitude){
        this.landmarkId = landmarkId;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
