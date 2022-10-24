package com.ssafy.nolmung.board.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="board_image_id")
    private int boardImageId;
}
