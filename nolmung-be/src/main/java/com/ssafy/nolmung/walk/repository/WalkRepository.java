package com.ssafy.nolmung.walk.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.walk.domain.Walk;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface WalkRepository extends JpaRepository<Walk, Integer> {
//    int countByWalkDateAndPuppyId(LocalDate walkDate, int puppyId);
//    Walk findByWalkDateAndPuppyId(LocalDate walkDate, int puppyId);

    List<Walk> findAllByWalkDateAndUserUserId(LocalDate walkDate, int userId);
}
