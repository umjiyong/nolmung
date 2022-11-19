package com.ssafy.nolmung.board.service;

import com.ssafy.nolmung.board.Repository.BoardLikeRepository;
import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.domain.BoardLike;
import com.ssafy.nolmung.board.dto.request.BoardLikeRequest;
import com.ssafy.nolmung.board.dto.response.BoardLikeResponse;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardLikeServiceImpl implements BoardLikeService{

    @Autowired
    BoardLikeRepository boardLikeRepository;

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public int addLike(BoardLikeRequest boardLikeRequest) {
        Board board = boardRepository.findById(boardLikeRequest.getBoardId()).orElseThrow();
        User user = userRepository.findById(boardLikeRequest.getUserId()).orElseThrow();

        if(boardLikeRepository.findByBoard_BoardIdAndUser_UserId(boardLikeRequest.getBoardId(), boardLikeRequest.getUserId())!=null) {
            return -1;
        }

        BoardLike boardLike = BoardLike.builder()
                .board(board).user(user).build();
        BoardLike newBoardLike = boardLikeRepository.save(boardLike);

        return newBoardLike.getBoardLikeId();
    }

    @Override
    public int cancelLike(BoardLikeRequest boardLikeRequest) {
        int boardId = boardLikeRequest.getBoardId();
        int userId = boardLikeRequest.getUserId();
        BoardLike boardLike = boardLikeRepository.findByBoard_BoardIdAndUser_UserId(boardId,userId);
        if(boardLike==null){
            return -1;
        }
        int boardLikeId = boardLike.getBoardLikeId();
        boardLikeRepository.deleteById(boardLikeId);
        return boardLikeId;
    }
}
