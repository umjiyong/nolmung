package com.ssafy.nolmung.board.dto.request;

import io.swagger.annotations.ApiParam;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardLikeRequest {

    @ApiParam(name="게시물 id")
    private int boardId;
    
    @ApiParam(name="사용자 id")
    private int userId;

    @Builder
    public BoardLikeRequest(int boardId, int userId) {
        this.boardId = boardId;
        this.userId = userId;
    }
}
