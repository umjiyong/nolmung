package com.ssafy.nolmung.boardComment.dto.request;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.boardComment.dto.response.BoardCommentResponseDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardCommentRequestDto {
    int boardId;
    int userId;
    String content;

    public BoardCommentRequestDto(int boardId, int userId, String content){
        this.boardId = boardId;
        this.userId = userId;
        this.content = content;
    }
}
