package com.ssafy.nolmung.friend.domain;

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
    @NotBlank
    private int friendId;

    @JoinColumn (name = "user_id")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private int userId;

    @JoinColumn (name = "user_id_2")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private int userId2;

    @Column(name = "friend_update_date")
    private LocalDateTime friendUpdateDate;


    @Builder
    public Friend (int userId , int userId2) {
        this.userId = userId;
        this.userId2 = userId2;
        this.friendUpdateDate = LocalDateTime.now();
    }
}
