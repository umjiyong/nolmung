package com.ssafy.nolmung.boardComment.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.boardComment.dto.response.BoardCommentResponseDto;
import com.ssafy.nolmung.boardComment.dto.response.MyCommentResponseDto;
import com.ssafy.nolmung.boardComment.repository.BoardCommentRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
public class BoardCommentServiceImpl implements BoardCommentService{

    private final BoardCommentRepository boardCommentRepository;
    private final UserRepository userRepository;

    private final BoardRepository boardRepository;

    public BoardCommentServiceImpl(BoardCommentRepository boardCommentRepository, UserRepository userRepository, BoardRepository boardRepository) {
        this.boardCommentRepository = boardCommentRepository;
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
    }

    @Override
    public List<MyCommentResponseDto> getMyCommentList(int userId) {

        List<BoardComment> commentList = boardCommentRepository.findAllByUserUserId(userId);
        List<MyCommentResponseDto> myCommentList = new ArrayList<>();

        for (int i = 0; i < commentList.size(); i++){
            BoardComment boardComment = commentList.get(i);

            MyCommentResponseDto comment = MyCommentResponseDto.builder()
                                                .boardCommentId(boardComment.getBoardCommentId())
                                                .boardId(boardComment.getBoard().getBoardId())
                                                .userNickName(boardComment.getUser().getUserNickname())
                                                .content(boardComment.getBoardCommentContent())
                                                .build();

            myCommentList.add(comment);
        }

        return myCommentList;
    }

    @Override
    public List<BoardCommentResponseDto> getBoardCommentList(int userId, int boardId) {
        List<BoardComment> commentList = boardCommentRepository.findAllByBoardBoardId(boardId);
        List<BoardCommentResponseDto> boardCommentList = new ArrayList<>();

        log.info("userId는 " + userId + " / " + "boardId는 " + boardId);
        log.info("댓글 수는 " + commentList.size());

        for (int i = 0; i < commentList.size(); i++){
            BoardComment comment = commentList.get(i);
            boolean isMyComment = isMyComment(comment.getBoardCommentId(), userId);

            BoardCommentResponseDto boardCommentResponseDto = BoardCommentResponseDto.builder()
                    .boardCommentId(comment.getBoardCommentId())
                    .userNickname(comment.getUser().getUserNickname())
                    .userImg(comment.getUser().getUserImg())
                    .userAddress(comment.getUser().getUserAddressText())
                    .createDate(comment.getBoardCommentCreateDate().toLocalDate())
                    .content(comment.getBoardCommentContent())
                    .isMyComment(isMyComment)
                    .build();

            boardCommentList.add(boardCommentResponseDto);
        }

        return boardCommentList;
    }

    @Override
    public void insertComment(int boardId, int userId, String content) {
        Board board = boardRepository.findByBoardId(boardId);
        User user = userRepository.findById(userId).get();

        BoardComment comment = BoardComment.builder()
                                    .board(board)
                                    .user(user)
                                    .boardCommentContent(content)
                                    .boardCommentCreateDate(LocalDateTime.now())
                                    .build();

        boardCommentRepository.save(comment);
    }

    @Override
    public void deleteComment(int userId, int boardCommentId) {
        BoardComment targetComment = boardCommentRepository.findById(boardCommentId).get();

        if(isMyComment(boardCommentId, userId)){
            boardCommentRepository.delete(targetComment);
        }
    }

    public boolean isMyComment(int boardCommentId, int userId){
        int commentCount = boardCommentRepository.countByBoardCommentIdAndUserUserId(boardCommentId, userId);

        return (commentCount == 1 ? true : false);
    }

}
