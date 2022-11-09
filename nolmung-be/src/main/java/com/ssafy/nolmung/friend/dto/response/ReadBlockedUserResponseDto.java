package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadBlockedUserResponseDto {

 private int blockId;
 private int blockedUserId;

 public ReadBlockedUserResponseDto(Block block) {

     this.blockId = block.getBlockId();
     this.blockedUserId = block.getBlockedUserId();

 }

}