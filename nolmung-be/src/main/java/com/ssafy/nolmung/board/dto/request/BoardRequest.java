package com.ssafy.nolmung.board.dto.request;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardRequest {


        @ApiParam(name = "작성자 id")
        private int userId;
        @ApiParam(name = "게시물의 카테고리 분류")
        private int boardClass;
        @ApiParam(name = "게시물 내용")
        private String boardContent;
        @ApiParam(name = "게시물 이미지 링크 모음")
        private List<String> boardImg;

        @Builder
        public BoardRequest(int userId, int boardClass, String boardContent, List<String> boardImg) {
            this.userId = userId;
            this.boardClass = boardClass;
            this.boardContent = boardContent;
            this.boardImg = boardImg;
        }
}
