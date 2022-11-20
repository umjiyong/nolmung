package com.ssafy.nolmung.walk.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TimeDto {
    int sec;
    int min;
    int hour;

    @Builder
    public TimeDto(int sec, int min, int hour){
        this.sec = sec;
        this.min = min;
        this.hour = hour;
    }
}
