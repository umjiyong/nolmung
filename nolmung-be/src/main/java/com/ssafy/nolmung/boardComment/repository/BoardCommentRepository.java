package com.ssafy.nolmung.boardComment.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Integer> {

    List<BoardComment> findAllByUserUserId(int userId);

    List<BoardComment> findAllByBoardBoardId(int boardId);
}
