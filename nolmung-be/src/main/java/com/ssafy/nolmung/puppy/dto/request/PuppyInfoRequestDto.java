package com.ssafy.nolmung.puppy.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PuppyInfoRequestDto {
    int userId;
    String puppyName;
    int breedId;
    LocalDate puppyBirth;
    int puppyWeight;
    String puppyCharacter;
    int puppySex;
    boolean puppyIsNeutered;
    String puppyImg;

    @Builder
    public PuppyInfoRequestDto(int userId, String puppyName, int breedId, LocalDate puppyBirth, int puppyWeight, String puppyCharacter, int puppySex, boolean puppyIsNeutered, String puppyImg){
        this.userId = userId;
        this.puppyName = puppyName;
        this.breedId = breedId;
        this.puppyBirth = puppyBirth;
        this.puppyWeight = puppyWeight;
        this.puppyCharacter = puppyCharacter;
        this.puppySex = puppySex;
        this.puppyIsNeutered = puppyIsNeutered;
        this.puppyImg = puppyImg;
    }
}
