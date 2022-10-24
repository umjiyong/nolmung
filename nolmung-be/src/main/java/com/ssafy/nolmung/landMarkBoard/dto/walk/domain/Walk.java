package com.ssafy.nolmung.landMarkBoard.dto.walk.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Walk {

    @Column(name = "walk_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int walkId;

    @Column(name = "walk_distance")
    private int walkDistance;

    @Column(name = "walk_start_time")
    private LocalDate walkStartTime;

    @Column(name = "walk_end_time")
    private LocalDate walkEndTime;

    @Column(name = "walk_img")
    private String walkImg;

    @Column(name = "walk_coordinate_id")
    private int walkCoordinateId;




    @Builder
    public Walk() {


    }
}
