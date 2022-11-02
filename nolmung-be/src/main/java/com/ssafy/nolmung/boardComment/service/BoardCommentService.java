package com.ssafy.nolmung.boardComment.service;

import com.ssafy.nolmung.boardComment.dto.response.BoardCommentResponseDto;
import com.ssafy.nolmung.boardComment.dto.response.MyCommentResponseDto;

import java.util.List;

public interface BoardCommentService {
    List<MyCommentResponseDto> getMyCommentList(int userId);

    List<BoardCommentResponseDto> getBoardCommentList(int userId, int boardId);

    void insertComment(int boardId, int userId, String content);

    void deleteComment(int userId, int boardCommentId);

}
