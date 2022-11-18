package com.ssafy.nolmung.InAppAlarm.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InAppAlarmRequest {

    private String inAppAlarmContent;
    private String inAppAlarmLink;
    private int userId;

    @Builder
    public InAppAlarmRequest(String inAppAlarmContent, String inAppAlarmLink, int userId) {
        this.inAppAlarmContent = inAppAlarmContent;
        this.inAppAlarmLink = inAppAlarmLink;
        this.userId = userId;
    }
}
