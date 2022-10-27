package com.ssafy.nolmung.boardComment.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserCommentRequestDto {
    int userId;
    int boardCommentId;

    public UserCommentRequestDto(int userId, int boardCommentId){
        this.userId = userId;
        this.boardCommentId = boardCommentId;
    }
}
