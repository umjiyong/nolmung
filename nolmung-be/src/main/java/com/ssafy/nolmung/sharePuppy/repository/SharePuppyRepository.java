package com.ssafy.nolmung.sharePuppy.repository;

import com.ssafy.nolmung.sharePuppy.domain.SharePuppy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SharePuppyRepository extends JpaRepository<SharePuppy, Integer> {

//    int countByPuppyPuppyIdAndUserUserId(int puppyId, int userId);

    List<SharePuppy> findAllByPuppyPuppyId(int puppyId);

    List<SharePuppy> findAllByUserUserId(int userId);

    int countByPuppyPuppyId(int puppyId);

    SharePuppy findByPuppyPuppyIdAndUserUserId(int puppyId, int userId);
}
