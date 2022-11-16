package com.ssafy.nolmung.user.dto.response;

import com.ssafy.nolmung.user.domain.User;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserTokenDataResponseDto {

    private int userId;
    private int isNewUser;
    private String userKakaoUuid;

    public UserTokenDataResponseDto(User user, int isNewUser) {
        this.userId = user.getUserId();
        this.userKakaoUuid = user.getUserKakaoUuid();
        this.isNewUser = isNewUser;
    }
}
