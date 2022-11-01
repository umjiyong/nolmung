package com.ssafy.nolmung.user.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Column(name = "user_id")
    @Id
    @NotBlank
    private int userId;


    @Builder
    public User (int userId) {
        this.userId = userId;
    }
}
