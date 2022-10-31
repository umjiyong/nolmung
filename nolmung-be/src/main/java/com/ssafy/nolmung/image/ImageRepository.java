package com.ssafy.nolmung.image;

import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.domain.BoardImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<BoardImage, Integer> {

    BoardImage save(BoardImage boardImage);
    List<BoardImage> findAllByBoard_BoardId(int boardId);
    void deleteAllByBoard_BoardId(int boardId);
}
