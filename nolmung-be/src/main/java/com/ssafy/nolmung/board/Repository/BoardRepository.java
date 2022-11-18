package com.ssafy.nolmung.board.Repository;

import com.ssafy.nolmung.board.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

    Board save(Board board);

    Long countByUser_UserId(int userId);

    List<Board> findAllByUser_UserId(int userId);
    Board findByBoardId(int boardId);
    List<Board> findAllByBoardClass(int boardClass);
    List<Board> findAllByRegion_RegionId(int regionId);
    void deleteByBoardId(int boardId);
}
