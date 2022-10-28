package com.ssafy.nolmung.puppy.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PuppyUserRequestDto {
    int puppyId;
    int userId;

    @Builder
    public PuppyUserRequestDto(int puppyId, int userId){
        this.puppyId = puppyId;
        this.userId = userId;
    }
}
