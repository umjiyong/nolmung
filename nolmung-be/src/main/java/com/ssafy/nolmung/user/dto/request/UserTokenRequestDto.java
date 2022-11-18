package com.ssafy.nolmung.user.dto.request;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class UserTokenRequestDto {

    private String accessToken;
    private String refreshToken;
}
