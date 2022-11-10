package com.ssafy.nolmung.landMarkBoard.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkListResponseDto {
    int landmarkId;
    double landMarkLat;
    double landMarkLon;

    @Builder
    public LandMarkListResponseDto(int landmarkId, double landMarkLat, double landMarkLon){
        this.landmarkId = landmarkId;
        this.landMarkLat = landMarkLat;
        this.landMarkLon = landMarkLon;
    }
}
