package com.ssafy.nolmung.board.Repository;

import com.ssafy.nolmung.board.domain.BoardLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardLikeRepository extends JpaRepository<BoardLike, Integer> {

    BoardLike save(BoardLike boardLike);
    void deleteByBoardLikeId(int boardLikeId);

}
