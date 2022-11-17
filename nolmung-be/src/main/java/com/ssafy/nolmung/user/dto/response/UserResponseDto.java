package com.ssafy.nolmung.user.dto.response;

import com.ssafy.nolmung.user.domain.User;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class UserResponseDto {

    private int userId;
    private int regionId;
    private String userNickName;
    private String userIntroduction;
    private String userAddressText;
    private String userCode;
    private int userScore;
    private LocalDateTime userUpdateDate;
    private String userImg;
    private String userEmail;
//    private String userKakaoUuid;

    public UserResponseDto(User user){
        this.userId = user.getUserId();
        if(user.getRegion() != null) {
            this.regionId = user.getRegion().getRegionId();
        }
        this.userNickName = user.getUserNickname();
        this.userAddressText = user.getUserAddressText();
        this.userIntroduction = user.getUserIntroduction();
        this.userCode = user.getUserCode();
        this.userScore = user.getUserScore();
        this.userUpdateDate = user.getUserUpdateDate();
        this.userImg = user.getUserImg();
        this.userEmail = user.getUserEmail();
//        this.userKakaoUuid = user.getUserKakaoUuid();
    }
}
