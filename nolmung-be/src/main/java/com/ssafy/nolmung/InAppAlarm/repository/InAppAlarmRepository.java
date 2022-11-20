package com.ssafy.nolmung.InAppAlarm.repository;

import com.ssafy.nolmung.InAppAlarm.domain.InAppAlarm;
import com.ssafy.nolmung.boardComment.domain.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InAppAlarmRepository extends JpaRepository<InAppAlarm, Integer> {
}
