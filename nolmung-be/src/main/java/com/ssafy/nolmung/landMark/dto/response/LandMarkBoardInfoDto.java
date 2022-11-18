package com.ssafy.nolmung.landMark.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMarkBoardInfoDto {
      int landmarkBoardId;
      int userId;
      String nickname;
      String userImageUrl;
      String boardImageUrl;
      String content;
      LocalDateTime createTime;

      @Builder
      public LandMarkBoardInfoDto(int landmarkBoardId, int userId, String nickname, String userImageUrl, String boardImageUrl, String content, LocalDateTime createTime){
          this.landmarkBoardId = landmarkBoardId;
          this.userId = userId;
          this.nickname = nickname;
          this.userImageUrl = userImageUrl;
          this.boardImageUrl = boardImageUrl;
          this.content = content;
          this.createTime = createTime;
      }
}
