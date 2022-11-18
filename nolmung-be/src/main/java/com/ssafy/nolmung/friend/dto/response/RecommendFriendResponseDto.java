package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class RecommendFriendResponseDto {

    private int userId;

    public RecommendFriendResponseDto(int userId) {

        this.userId = userId;

    }
}
