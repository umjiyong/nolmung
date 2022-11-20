package com.ssafy.nolmung.board.dto.response;

import io.swagger.annotations.ApiParam;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardResponse {

    @ApiParam(name = "게시물 id")
    private int boardId;

    @ApiParam(name = "작성자 id")
    private int userId;
    @ApiParam(name = "작성자 이름")
    private String userName;
    @ApiParam(name = "작성자 프로필 이미지 링크")
    private String userImg;
    @ApiParam(name = "게시물의 카테고리 분류")
    private int boardClass;
    @ApiParam(name = "작성자가 속한지역")
    private String region;
    @ApiParam(name = "게시물 내용")
    private String boardContent;
    @ApiParam(name = "게시물 업데이트 일시")
    private LocalDateTime boardUpdateDate;
    @ApiParam(name = "게시물 이미지 링크 모음")
    private List<String> boardImg;
    @ApiParam(name = "게시물의 좋아요 수")
    private int likeCnt;

    @Builder
    public BoardResponse(int boardId, int userId, String userName, String userImg, int boardClass, String region, String boardContent, LocalDateTime boardUpdateDate, List<String> boardImg, int likeCnt) {
        this.boardId = boardId;
        this.userId = userId;
        this.userName = userName;
        this.userImg = userImg;
        this.boardClass = boardClass;
        this.region = region;
        this.boardContent = boardContent;
        this.boardUpdateDate = boardUpdateDate;
        this.boardImg = boardImg;
        this.likeCnt = likeCnt;
    }
}
