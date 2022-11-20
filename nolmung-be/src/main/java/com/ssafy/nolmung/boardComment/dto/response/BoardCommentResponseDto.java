package com.ssafy.nolmung.boardComment.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardCommentResponseDto {
    String userNickname;
    String userImg;
    String userAddress;
    LocalDateTime createDate;
    String content;
    boolean isMyComment;

    @Builder
    public BoardCommentResponseDto(String userNickname, String userImg, String userAddress, LocalDateTime createDate, String content, boolean isMyComment){
        this.userNickname = userNickname;
        this.userImg = userImg;
        this.userAddress = userAddress;
        this.createDate = createDate;
        this.content = content;
        this.isMyComment = isMyComment;
    }
}
