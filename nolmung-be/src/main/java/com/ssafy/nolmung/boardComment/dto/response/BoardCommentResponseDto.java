package com.ssafy.nolmung.boardComment.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardCommentResponseDto {
    int boardCommentId;
    String userNickname;
    String userImg;
    String userAddress;
    LocalDate createDate;
    String content;
    boolean isMyComment;

    @Builder
    public BoardCommentResponseDto(int boardCommentId, String userNickname, String userImg, String userAddress, LocalDate createDate, String content, boolean isMyComment){
        this.boardCommentId = boardCommentId;
        this.userNickname = userNickname;
        this.userImg = userImg;
        this.userAddress = userAddress;
        this.createDate = createDate;
        this.content = content;
        this.isMyComment = isMyComment;
    }
}
