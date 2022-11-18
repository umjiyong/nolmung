package com.ssafy.nolmung.landMark.repository;

import com.ssafy.nolmung.landMark.domain.LandMark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkRepository extends JpaRepository<LandMark, Integer> {
}
