package com.ssafy.nolmung.InAppAlarm.service;

import com.ssafy.nolmung.InAppAlarm.domain.InAppAlarm;
import com.ssafy.nolmung.InAppAlarm.dto.request.InAppAlarmRequest;
import com.ssafy.nolmung.InAppAlarm.dto.response.InAppAlarmResponse;
import com.ssafy.nolmung.InAppAlarm.repository.InAppAlarmRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class InAppAlarmServiceImpl implements InAppAlarmService{

    @Autowired
    private InAppAlarmRepository inAppAlarmRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public int createInAppAlarm(InAppAlarmRequest inAppAlarmRequest) {
        User user = userRepository.findById(inAppAlarmRequest.getUserId()).orElseThrow();
        InAppAlarm inAppAlarm = InAppAlarm.builder()
                .inAppAlarmContent(inAppAlarmRequest.getInAppAlarmContent())
                .inAppAlarmLink(inAppAlarmRequest.getInAppAlarmLink())
                .inAppAlarmIsCheck(false)
                .inAppAlarmUpdateDate(LocalDateTime.now())
                .user(user)
                .build();

        InAppAlarm newInAppAlarm = inAppAlarmRepository.save(inAppAlarm);
        // save 실패 시 에러 처리 필요
        if(newInAppAlarm==null) return -1;
        return newInAppAlarm.getInAppAlarmId();
    }

    @Override
    public List<InAppAlarmResponse> searchUserInAppAlarm(int userId) {
        List<InAppAlarm> inAppAlarms = inAppAlarmRepository.findAllByUser_UserIdOrderByInAppAlarmUpdateDateDesc(userId);
        List<InAppAlarmResponse> result = new ArrayList<>();

        for (InAppAlarm inAppAlarm : inAppAlarms) {
            result.add(inAppAlarm.toInAppAlarmResponse());
        }
        return result;
    }
}
