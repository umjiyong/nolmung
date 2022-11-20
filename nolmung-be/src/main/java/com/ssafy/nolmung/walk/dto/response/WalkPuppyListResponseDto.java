package com.ssafy.nolmung.walk.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkPuppyListResponseDto {
    int puppyId;
    String puppyName;
    String puppyImg;

    @Builder
    public WalkPuppyListResponseDto(int puppyId, String puppyImg, String puppyName){
        this.puppyId = puppyId;
        this.puppyName = puppyName;
        this.puppyImg = puppyImg;
    }
}
