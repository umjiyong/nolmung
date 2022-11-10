package com.ssafy.nolmung.friend.domain;

import com.ssafy.nolmung.user.domain.User;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Friend {

    @Column(name = "friend_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int friendId;

    @JoinColumn (name = "user_id")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private User user;

    @Column(name = "sub_user_id")
    private int subUserId;

    @Column(name = "friend_update_date")
    private LocalDateTime friendUpdateDate;


    @Builder
    public Friend (User user , int subUserId) {
        this.user = user;
        this.subUserId = subUserId;
        this.friendUpdateDate = LocalDateTime.now();
    }
}
