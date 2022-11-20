package com.ssafy.nolmung.InAppAlarm.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InAppAlarmResponse {

    private int inAppAlarmId;
    private String inAppAlarmUpdateDate;
    private String inAppAlarmContent;
    private String inAppAlarmLink;
    private boolean inAppAlarmIsCheck;

    @Builder
    public InAppAlarmResponse(int inAppAlarmId, String inAppAlarmUpdateDate, String inAppAlarmContent, String inAppAlarmLink, boolean inAppAlarmIsCheck) {
        this.inAppAlarmId = inAppAlarmId;
        this.inAppAlarmUpdateDate = inAppAlarmUpdateDate;
        this.inAppAlarmContent = inAppAlarmContent;
        this.inAppAlarmLink = inAppAlarmLink;
        this.inAppAlarmIsCheck = inAppAlarmIsCheck;
    }
}
