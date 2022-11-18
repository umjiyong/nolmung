package com.ssafy.nolmung.puppy.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BreedListResponseDto {
    int breedId;
    String breedName;

    @Builder
    public BreedListResponseDto(int breedId, String breedName){
        this.breedId = breedId;
        this.breedName = breedName;
    }
}
