package com.ssafy.nolmung.friend.dto.response;

import lombok.Data;

@Data
public class ReadUserByUserCodeResponseDto {

    private int userId;

    public ReadUserByUserCodeResponseDto(int userId) {

        this.userId = userId;

    }
}
