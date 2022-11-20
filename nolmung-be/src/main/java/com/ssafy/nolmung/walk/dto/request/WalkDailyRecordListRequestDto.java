package com.ssafy.nolmung.walk.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WalkDailyRecordListRequestDto {
    int puppyId;
    LocalDate walkDate;
}
