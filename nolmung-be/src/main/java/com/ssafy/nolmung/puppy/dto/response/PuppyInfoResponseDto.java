package com.ssafy.nolmung.puppy.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PuppyInfoResponseDto {
    int puppyId;
    String puppyName;
    int breedId;

    String breedName;

    int needWalkTime;

    int puppyAge;
    LocalDate puppyBirth;
    int puppyWeight;
    String puppyCharacter;
    int puppySex;
    boolean puppyIsNeutered;
    String puppyImg;

    String puppyCode;

    List<String> shareUserImageList = new ArrayList<>();



    @Builder
    public PuppyInfoResponseDto(int puppyId, String breedName, int puppyAge, int needWalkTime, String puppyName, int breedId, LocalDate puppyBirth, int puppyWeight, String puppyCharacter, int puppySex, boolean puppyIsNeutered, String puppyImg, String puppyCode, List<String> shareUserImageList){
        this.puppyId = puppyId;
        this.puppyName = puppyName;
        this.breedId = breedId;
        this.puppyBirth = puppyBirth;
        this.puppyWeight = puppyWeight;
        this.puppyCharacter = puppyCharacter;
        this.puppySex = puppySex;
        this.puppyIsNeutered = puppyIsNeutered;
        this.puppyImg = puppyImg;
        this.puppyCode = puppyCode;
        this.shareUserImageList = shareUserImageList;
        this.breedName = breedName;
        this.puppyAge = puppyAge;
        this.needWalkTime = needWalkTime;
    }

}
