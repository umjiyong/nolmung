package com.ssafy.nolmung.puppy.dto.response;

import com.ssafy.nolmung.puppy.domain.Breed;
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

    String breed;

    int age;

    int needWalkTime;


    @Builder
    public PuppyListResponseDto(int puppyId, String puppyName, String puppyImg, String breed, int age, int needWalkTime){
        this.puppyId = puppyId;
        this.puppyName = puppyName;
        this.puppyImg = puppyImg;
        this.breed = breed;
        this.age = age;
        this.needWalkTime = needWalkTime;
    }
}
