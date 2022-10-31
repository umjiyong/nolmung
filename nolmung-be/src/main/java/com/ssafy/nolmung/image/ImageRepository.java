package com.ssafy.nolmung.image;

import com.ssafy.nolmung.board.domain.BoardImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository {

    BoardImage save(BoardImage boardImage);
    List<BoardImage> findAllByBoard_BoardId(int boardId);
    void deleteAllByBoard_BoardId(int boardId);
}
