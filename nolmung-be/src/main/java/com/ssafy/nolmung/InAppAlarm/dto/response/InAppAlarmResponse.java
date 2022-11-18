package com.ssafy.nolmung.InAppAlarm.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InAppAlarmResponse {

    private LocalDateTime inAppAlarmUpdateDate;
    private String inAppAlarmContent;
    private String inAppAlarmLink;
    private boolean inAppAlarmIsCheck;

    @Builder
    public InAppAlarmResponse(LocalDateTime inAppAlarmUpdateDate, String inAppAlarmContent, String inAppAlarmLink, boolean inAppAlarmIsCheck) {
        this.inAppAlarmUpdateDate = inAppAlarmUpdateDate;
        this.inAppAlarmContent = inAppAlarmContent;
        this.inAppAlarmLink = inAppAlarmLink;
        this.inAppAlarmIsCheck = inAppAlarmIsCheck;
    }
}
