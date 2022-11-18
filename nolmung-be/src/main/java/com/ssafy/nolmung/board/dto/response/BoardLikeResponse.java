package com.ssafy.nolmung.board.dto.response;

import io.swagger.annotations.ApiParam;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardLikeResponse {

    @ApiParam(name="게시물 id")
    private int boardId;
    @ApiParam(name="게시물의 좋아요 수")
    private int boardLikeCnt;


    @Builder
    public BoardLikeResponse(int boardId, int boardLikeCnt) {
        this.boardId = boardId;
        this.boardLikeCnt = boardLikeCnt;
    }
}
