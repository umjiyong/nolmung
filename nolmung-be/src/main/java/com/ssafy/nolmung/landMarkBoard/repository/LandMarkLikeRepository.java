package com.ssafy.nolmung.landMarkBoard.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkLikeRepository extends JpaRepository<LandMarkLike, Integer> {
}
