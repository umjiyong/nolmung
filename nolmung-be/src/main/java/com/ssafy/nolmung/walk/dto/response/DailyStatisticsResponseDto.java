package com.ssafy.nolmung.walk.dto.response;

import com.ssafy.nolmung.walk.dto.TimeDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DailyStatisticsResponseDto {

    List<String> dateList;
    List<Double> attainment;

    @Builder
    public DailyStatisticsResponseDto(List<String> dateList, List<Double> attainment){
        this.dateList = dateList;
        this.attainment = attainment;
    }
}
