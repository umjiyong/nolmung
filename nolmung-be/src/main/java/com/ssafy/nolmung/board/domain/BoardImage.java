package com.ssafy.nolmung.board.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.Builder;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "board_id")
    private Board board;


    @Column(name="board_image_url")
    private String boardImageUrl;

    @Builder
    public BoardImage(Board board, String boardImageUrl) {
        this.board = board;
        this.boardImageUrl = boardImageUrl;
    }
}
