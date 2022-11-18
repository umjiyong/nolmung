package com.ssafy.nolmung.walk.dto.response;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkStatisticsResponseDto {
    List<String> labels;
    List<List<Double>> datasets;
}

