package com.ssafy.nolmung.InAppAlarm.repository;

import com.ssafy.nolmung.InAppAlarm.domain.InAppAlarm;
import com.ssafy.nolmung.boardComment.domain.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InAppAlarmRepository extends JpaRepository<InAppAlarm, Integer> {

    InAppAlarm save(InAppAlarm inAppAlarm);
    List<InAppAlarm> findAllByUser_UserIdOrderByInAppAlarmUpdateDateDesc(int userId);
}
