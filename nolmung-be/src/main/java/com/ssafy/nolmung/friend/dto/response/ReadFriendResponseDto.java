package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadFriendResponseDto {

 private int userId;
 private String userNickname;

 public ReadFriendResponseDto (Friend friend) {
   this.userId = friend.getUser().getUserId();

 }

}