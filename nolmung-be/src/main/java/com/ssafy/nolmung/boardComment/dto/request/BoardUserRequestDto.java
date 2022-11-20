package com.ssafy.nolmung.boardComment.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardUserRequestDto {
    int boardId;
    int userId;

    public BoardUserRequestDto(int boardId, int userId){
        this.boardId = boardId;
        this.userId = userId;
    }

}
