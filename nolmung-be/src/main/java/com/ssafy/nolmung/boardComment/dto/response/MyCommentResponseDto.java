package com.ssafy.nolmung.boardComment.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyCommentResponseDto {

    int boardCommentId;

    int boardId;

    String userNickName;

    String content;

    @Builder
    MyCommentResponseDto(int boardCommentId, int boardId, String userNickName, String content){
        this.boardCommentId = boardCommentId;
        this.boardId = boardId;
        this.userNickName = userNickName;
        this.content = content;
    }
}
