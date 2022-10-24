package com.ssafy.nolmung.landMarkBoard.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandMarkBoardRepository extends JpaRepository<LandMarkBoard, Integer> {
}
