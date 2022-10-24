package com.ssafy.nolmung.board.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.dto.request.BoardRequest;
import com.ssafy.nolmung.board.dto.response.BoardResponse;
import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public int createBoard(BoardRequest boardRequest) {
        User user = null;
        Region region = null;
        Board board = Board.builder()
                .boardContent(boardRequest.getBoardContent())
                .boardUpdateDate(LocalDateTime.now())
                .boardClass(boardRequest.getBoardClass())
                .user(user)
                .region(region).build();

        Board newBoard = boardRepository.save(board);
        if(newBoard.)
        return 0;
    }

    @Override
    public List<BoardResponse> searchAllBoard() {
        List<Board> boards = boardRepository.findAll();
        return result;
    }

    @Override
    public List<BoardResponse> searchUserBoard(int userId) {
        List<Board> boards = boardRepository.findAllByUser_UserId(userId);
        return result;
    }

    @Override
    public BoardResponse searchBoard(int boardId) {
        Board boards = boardRepository.findByBoardId(boardId);
        return result;
    }

    @Override
    public List<BoardResponse> searchAllByBoardCategory(int boardCategory) {
        return null;
    }

    @Override
    public int deleteBoard(int boardId) {
        return 0;
    }
}
