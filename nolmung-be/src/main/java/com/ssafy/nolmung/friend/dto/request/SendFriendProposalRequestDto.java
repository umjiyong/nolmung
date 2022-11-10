package com.ssafy.nolmung.friend.dto.request;

import lombok.Data;

@Data
public class SendFriendProposalRequestDto {
    private int toUserId;
    private int fromUserId;
}
