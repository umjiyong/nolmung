package com.ssafy.nolmung.landMarkBoard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.user.domain.User;
import lombok.Builder;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class LandMarkBoard {
    @Column(name = "landmark_board_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int landMarkBoardId;

    @Column(name = "landmark_board_content")
    private String landMarkBoardContent;

    @Column(name = "landmark_board_update_date")
    private LocalDateTime landMarkBoardUpdateDate;

    @Column(name = "landmark_board_img")
    private String landMarkBoardImg;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "landmark_id")
    @JsonBackReference
    private LandMark landMark;

    @Builder
    public LandMarkBoard(int landMarkBoardId, String landMarkBoardContent, LocalDateTime landMarkBoardUpdateDate, String landMarkBoardImg, User user, LandMark landMark){
        this.landMarkBoardId = landMarkBoardId;
        this.landMarkBoardContent = landMarkBoardContent;
        this.landMarkBoardUpdateDate = landMarkBoardUpdateDate;
        this.landMarkBoardImg = landMarkBoardImg;
        this.user = user;
        this.landMark = landMark;

    }

}
