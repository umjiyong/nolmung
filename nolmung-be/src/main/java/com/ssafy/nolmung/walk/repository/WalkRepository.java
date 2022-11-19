package com.ssafy.nolmung.walk.repository;

import com.ssafy.nolmung.walk.domain.Walk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface WalkRepository extends JpaRepository<Walk, Integer> {
    int countByWalkDateAndPuppyPuppyId(LocalDate walkDate, int puppyId);

    @Query(value = "SELECT max(walk_attainment) from walk where walk_date = :date and puppy_id = :puppyId group by puppy_id;", nativeQuery = true)
    Double findDistanceByDayAndPuppy(@Param("puppyId")int puppyId, @Param("date")LocalDate date);

    List<Walk> findAllByWalkDateAndUserUserId(LocalDate walkDate, int userId);
    List<Walk> findAllByWalkDateAndPuppyPuppyId(LocalDate walkDate, int puppyId);
}
