package com.ssafy.nolmung.friend.dto.request;

import lombok.Data;

@Data
public class BlockFriendRequestDto {
    private int userId;
    private int blockedUserId;
}
