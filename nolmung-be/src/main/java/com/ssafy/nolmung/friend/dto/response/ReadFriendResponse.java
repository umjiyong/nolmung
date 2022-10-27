package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadFriendResponse {

 private int userId;
 private String userNickname;

}