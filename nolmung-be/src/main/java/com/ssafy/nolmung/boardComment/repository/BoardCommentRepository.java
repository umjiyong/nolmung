package com.ssafy.nolmung.boardComment.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Integer> {
}
