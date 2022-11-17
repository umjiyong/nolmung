package com.ssafy.nolmung.landMarkBoard.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkBoardListDto {
    int landmarkBoardId;
    String content;
    String nickname;
    String boardImage;
    LocalDateTime createDate;

    @Builder
    public LandMarkBoardListDto(int landmarkBoardId, String content, String nickname, String boardImage, LocalDateTime createDate){
        this.landmarkBoardId = landmarkBoardId;
        this.content = content;
        this.nickname = nickname;
        this.boardImage = boardImage;
        this.createDate = createDate;
    }
}
