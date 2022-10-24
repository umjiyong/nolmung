package com.ssafy.nolmung.board.service;

import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.dto.request.BoardRequest;

import java.util.List;

public interface BoardService {

    // 게시물 등록
    int createBoard(BoardRequest boardRequest);

    // 전체 게시물 조회
    List<Board> searchAllBoard();
    // 특정 user의 게시물 조회
    List<Board> searchUserBoard(int userId);
    // 특정 게시물 조회
    Board searchBoard(int boardId);
    // 카테고리 내 모든 게시물 조회
    List<Board> searchAllByBoardCategory(int boardCategory);

    //게시물 삭제
    int deleteBoard(int boardId);
}
