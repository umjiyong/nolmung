package com.ssafy.nolmung.rank.repository;

import com.ssafy.nolmung.rank.domain.MonthlyRank;
import com.ssafy.nolmung.rank.domain.WeeklyRank;
import org.springframework.data.repository.CrudRepository;

public interface WeeklyRankRepository extends CrudRepository<WeeklyRank, Integer> {
}