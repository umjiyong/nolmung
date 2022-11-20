package com.ssafy.nolmung.friend.dto.request;

import lombok.Data;

@Data
public class DeleteFriendRequestDto {

    private int userId;
    private int subUserId;

}
