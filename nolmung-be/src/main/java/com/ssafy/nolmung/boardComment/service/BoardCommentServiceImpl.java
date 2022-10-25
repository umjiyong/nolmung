package com.ssafy.nolmung.boardComment.service;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.boardComment.dto.response.BoardCommentResponseDto;
import com.ssafy.nolmung.boardComment.dto.response.MyCommentResponseDto;
import com.ssafy.nolmung.boardComment.repository.BoardCommentRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
public class BoardCommentServiceImpl implements BoardCommentService{

    private final BoardCommentRepository boardCommentRepository;
    private final UserRepository userRepository;

    public BoardCommentServiceImpl(BoardCommentRepository boardCommentRepository, UserRepository userRepository) {
        this.boardCommentRepository = boardCommentRepository;
        this.userRepository = userRepository;
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

        for (int i = 0; i < commentList.size(); i++){
            BoardComment comment = commentList.get(i);

            BoardCommentResponseDto boardCommentResponseDto = BoardCommentResponseDto.builder()
                    .userNickname(comment.getUser().getUserNickname())
                    .userImg(comment.getUser().getUserImg())
                    .userAddress(comment.getUser().getUserAddressText())
                    .createDate(comment.getBoardCommentCreateDate())
                    .content(comment.getBoardCommentContent())
                    .isMyComment(true) // 수정해야함
                    .build();
        }

        return boardCommentList;
    }
}
