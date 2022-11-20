package com.ssafy.nolmung.landMark.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LandmarkBoardRequestDto {
    int userId;
    int landmarkId;
    String content;
    String imageUrl;
    LocalDateTime landmarkBoardCreateDate;
}
