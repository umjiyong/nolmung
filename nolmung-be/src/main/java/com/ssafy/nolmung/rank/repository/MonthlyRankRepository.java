package com.ssafy.nolmung.rank.repository;

import com.ssafy.nolmung.rank.domain.MonthlyRank;
import org.springframework.data.repository.CrudRepository;

public interface MonthlyRankRepository extends CrudRepository<MonthlyRank, Integer> {
}