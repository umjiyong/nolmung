package com.ssafy.nolmung.user.dto.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegistUserRequestDto {

    private int userId;
    private int regionId;
    private String userIntroduction;
    private double userLat;
    private double userLot;
    private String userAddressText;
    private String userCode;
    private int userScore;
    private LocalDateTime userUpdateDate;
    private String userImg;
    private String userEmail;
    private String userKakaoUuid;
}
