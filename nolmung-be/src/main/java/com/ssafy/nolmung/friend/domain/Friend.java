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
    private String friendId;

    @Column(name = "friend_update_date")
    private LocalDateTime friendUpdateDate;


    @Builder
    public Friend (String friendId) {
        this.friendId = friendId;
        this.friendUpdateDate = LocalDateTime.now();
    }
}
