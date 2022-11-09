package com.ssafy.nolmung.walk.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access  = AccessLevel.PROTECTED)
public class Walk {

    @Column(name = "walk_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int walkId;

    @Column(name = "walk_distance")
    private int walkDistance;

    @Column(name = "walk_start_time")
    private LocalDateTime walkStartTime;

    @Column(name = "walk_end_time")
    private LocalDateTime walkEndTime;

    @Column(name = "walk_img")
    private String walkImg;

    @Column(name = "walk_coordinated_id")
    private int walkCoordinatedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "puppy_id")
    @JsonBackReference
    private Puppy puppy;

    public void changeWalkImage(String walkImgUrl){
        this.walkImg = walkImgUrl;
    }

    @Builder
    public Walk(int walkId, Puppy puppy, User user, int walkDistance, LocalDateTime walkStartTime, LocalDateTime walkEndTime, String walkImg, int walkCoordinatedId) {
        this.walkId = walkId;
        this.puppy = puppy;
        this.user = user;
        this.walkDistance = walkDistance;
        this.walkStartTime = walkStartTime;
        this.walkEndTime = walkEndTime;
        this.walkImg = walkImg;
        this.walkCoordinatedId = walkCoordinatedId;
    }
}
