package com.ssafy.nolmung.walk.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;
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
    private double walkDistance;

    @Column(name = "walk_date")
    private LocalDate walkDate;

    @Column(name = "walk_start_time")
    private LocalDateTime walkStartTime;

    @Column(name = "walk_end_time")
    private LocalDateTime walkEndTime;

    @Column(name = "walk_user_img")
    private String walkUserImg;

    @Column(name = "walk_tracking_img")
    private String walkTrackingImg;

//    @Column(name = "walk_coordinated_id")
//    private int walkCoordinatedId;
    @Column(name = "walk_attainment")
    private double walkAttainmentTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "puppy_id")
    @JsonBackReference
    private Puppy puppy;

    public void changeWalkImage(String walkImgUrl){
        this.walkUserImg = walkImgUrl;
    }


    @Builder
    public Walk(int walkId, Puppy puppy, User user, double walkDistance, LocalDate walkDate, LocalDateTime walkStartTime, LocalDateTime walkEndTime, String walkUserImg, String walkTrackingImg, double walkAttainmentTime) {
        this.walkId = walkId;
        this.puppy = puppy;
        this.user = user;
        this.walkDistance = walkDistance;
        this.walkStartTime = walkStartTime;
        this.walkEndTime = walkEndTime;
        this.walkDate = walkDate;
        this.walkTrackingImg = walkTrackingImg;
        this.walkUserImg = walkUserImg;
        this.walkAttainmentTime = walkAttainmentTime;
//        this.walkCoordinatedId = walkCoordinatedId;
    }
}
