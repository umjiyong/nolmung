package com.ssafy.nolmung.landMarkBoard.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkInfoResponseDto {
    int landmarkId;
    String landmarkName;
    String landmarkImg;
    boolean isLike;

    @Builder
    public LandMarkInfoResponseDto(int landmarkId, String landmarkName, String landmarkImg, boolean isLike){
        this.landmarkId = landmarkId;
        this.landmarkName = landmarkName;
        this.landmarkImg = landmarkImg;
        this.isLike = isLike;
    }
}
