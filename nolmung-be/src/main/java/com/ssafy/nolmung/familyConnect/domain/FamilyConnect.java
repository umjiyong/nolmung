package com.ssafy.nolmung.familyConnect.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access  = AccessLevel.PROTECTED)
public class FamilyConnect {

    @Column(name = "family_connect_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int familyConnectId;

    @Column(name = "family_connect_update_date")
    private LocalDateTime familyConnectUpdateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "puppy_id")
    @JsonBackReference
    private Puppy puppy;

    @Builder
    public FamilyConnect(int familyConnectId, LocalDateTime familyConnectUpdateDate, User user, Puppy puppy) {
        this.familyConnectId = familyConnectId;
        this.familyConnectUpdateDate = familyConnectUpdateDate;
        this.user = user;
        this.puppy = puppy;
    }
}
