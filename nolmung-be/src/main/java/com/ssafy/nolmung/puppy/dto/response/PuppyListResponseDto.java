package com.ssafy.nolmung.puppy.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PuppyListResponseDto {
    int puppyId;
    String puppyName;
    String puppyImg;

    @Builder
    public PuppyListResponseDto(int puppyId, String puppyName, String puppyImg){
        this.puppyId = puppyId;
        this.puppyName = puppyName;
        this.puppyImg = puppyImg;
    }
}
