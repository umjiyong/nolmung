package com.ssafy.nolmung.landMarkBoard.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LandMark {

    @Column(name = "landmark_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int landMarkId;

    @Column(name = "landmark_name")
    private String landMarkName;

    @Column(name = "landmark_lat")
    private double landMarkLat;

    @Column(name = "landmark_lon")
    private double landMarkLon;

    @Column(name = "landmark_img")
    private String landMarkImg;

    @Builder
    public LandMark(int landMarkId, String landMarkName, double landMarkLat, double landMarkLon, String landMarkImg){
        this.landMarkId = landMarkId;
        this.landMarkName = landMarkName;
        this.landMarkLat = landMarkLat;
        this.landMarkLon = landMarkLon;
        this.landMarkImg = landMarkImg;
    }
}
