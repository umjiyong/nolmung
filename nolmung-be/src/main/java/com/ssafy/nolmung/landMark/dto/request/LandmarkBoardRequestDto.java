package com.ssafy.nolmung.landMark.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class LandmarkBoardRequestDto {
    int userId;
    int landmarkId;
    String content;
    String imageUrl;
    LocalDateTime landmarkBoardCreateDate;
}
