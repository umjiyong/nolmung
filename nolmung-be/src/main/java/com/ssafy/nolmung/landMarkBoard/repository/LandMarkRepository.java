package com.ssafy.nolmung.landMarkBoard.repository;

import com.ssafy.nolmung.landMarkBoard.domain.LandMark;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkRepository extends JpaRepository<LandMark, Integer> {
}
