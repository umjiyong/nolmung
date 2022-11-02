package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadFriendResponseDto {

 private int subUserId;

 public ReadFriendResponseDto (Friend friend) {

   this.subUserId = friend.getSubUserId();

 }

}