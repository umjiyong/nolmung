package com.ssafy.nolmung.walk.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.walk.domain.Walk;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface WalkRepository extends JpaRepository<Walk, Integer> {
//    int countByWalkDateAndPuppyId(LocalDate walkDate, int puppyId);
//    Walk findByWalkDateAndPuppyId(LocalDate walkDate, int puppyId);
}
