package com.ssafy.nolmung.landMark.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LandMarkUserRequestDto {
    int userId;
    int landmarkId;
}
