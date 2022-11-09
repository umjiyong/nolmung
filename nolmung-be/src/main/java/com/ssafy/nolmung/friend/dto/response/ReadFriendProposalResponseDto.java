package com.ssafy.nolmung.friend.dto.response;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadFriendProposalResponseDto {

 private int firendProposalId;
 private int toUserId;
 private int fromUserId;

 public ReadFriendProposalResponseDto(FriendProposal friendProposal) {

     this.firendProposalId = friendProposal.getFriendProposalId();
     this.toUserId = friendProposal.getToUserId();
     this.fromUserId = friendProposal.getFromUserId();

 }

}