package com.ssafy.nolmung.board.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="board_id")
    private int boardId;

    @Column(name="board_content")
    private String boardContent;

    @Column(name="board_update_date")
    private LocalDateTime boardUpdateDate;

    @Column(name="board_class")
    private int boardClass;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="region_id")
    @JsonBackReference
    private Region region;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference
    private List<BoardLike> boardLikeList;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference
    private List<BoardImage> boardImageList;

    @Builder
    public Board(String boardContent, LocalDateTime boardUpdateDate, int boardClass, User user, Region region, List<BoardImage> boardImageList) {
        this.boardContent = boardContent;
        this.boardUpdateDate = boardUpdateDate;
        this.boardClass = boardClass;
        this.user = user;
        this.region = region;
        this.boardImageList = boardImageList;
    }
}