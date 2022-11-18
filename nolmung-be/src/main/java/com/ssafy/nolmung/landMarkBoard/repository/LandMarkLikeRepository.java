package com.ssafy.nolmung.landMarkBoard.repository;

import com.ssafy.nolmung.landMarkBoard.domain.LandMarkLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkLikeRepository extends JpaRepository<LandMarkLike, Integer> {
    int countByLandMarkLandMarkIdAndUserUserId(int landmarkId, int userId);
    void deleteByLandMarkLandMarkIdAndUserUserId(int landmarkId, int userId);
}
