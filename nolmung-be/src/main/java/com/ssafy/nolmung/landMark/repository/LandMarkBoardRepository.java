package com.ssafy.nolmung.landMark.repository;

import com.ssafy.nolmung.landMark.domain.LandMarkBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LandMarkBoardRepository extends JpaRepository<LandMarkBoard, Integer> {
    List<LandMarkBoard> findAllByLandMarkLandMarkId(int landmarkId);
}
