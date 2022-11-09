package com.ssafy.nolmung.rank.repository;

import com.ssafy.nolmung.rank.domain.DailyRank;
import com.ssafy.nolmung.rank.domain.WeeklyRank;
import org.springframework.data.repository.CrudRepository;

public interface DailyRankRepository extends CrudRepository<DailyRank, Integer> {
}