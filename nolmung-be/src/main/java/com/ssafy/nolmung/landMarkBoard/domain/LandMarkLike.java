package com.ssafy.nolmung.landMarkBoard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.user.domain.User;
import lombok.Builder;

import javax.persistence.*;

public class LandMarkLike {

    @Column(name = "landmark_like_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int landMarkLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "landmark_id")
    @JsonBackReference
    private LandMark landMark;


    @Builder
    public LandMarkLike(int landMarkLikeId, User user, LandMark landMark){
        this.landMarkLikeId = landMarkLikeId;
        this.user = user;
        this.landMark = landMark;
    }

}
