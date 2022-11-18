package com.ssafy.nolmung.InAppAlarm.service;

import com.ssafy.nolmung.InAppAlarm.dto.request.InAppAlarmRequest;
import com.ssafy.nolmung.InAppAlarm.dto.response.InAppAlarmResponse;

import java.util.List;

public interface InAppAlarmService {

    int createInAppAlarm(InAppAlarmRequest inAppAlarmRequest);
    List<InAppAlarmResponse> searchUserInAppAlarm(int userId);
}
