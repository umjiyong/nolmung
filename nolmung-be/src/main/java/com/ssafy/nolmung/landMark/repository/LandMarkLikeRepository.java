package com.ssafy.nolmung.landMark.repository;

import com.ssafy.nolmung.landMark.domain.LandMarkLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkLikeRepository extends JpaRepository<LandMarkLike, Integer> {
    int countByLandMarkLandMarkIdAndUserUserId(int landmarkId, int userId);
    void deleteByLandMarkLandMarkIdAndUserUserId(int landmarkId, int userId);
}
