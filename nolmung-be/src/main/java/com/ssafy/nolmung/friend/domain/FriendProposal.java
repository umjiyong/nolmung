package com.ssafy.nolmung.friend.domain;

import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FriendProposal {

    @Column(name = "friend_proposal_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotBlank
    private int friendProposalId;

    @Column(name = "to_user_id")
    private int toUserId;

    @Column(name = "from_user_id")
    private int fromUserId;

    @Builder
    public FriendProposal (int toUserId , int fromUserId) {
        this.toUserId = toUserId;
        this.fromUserId = fromUserId;
    }
}
