package com.ssafy.nolmung.board.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.nolmung.board.dto.response.BoardResponse;
import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    @JsonManagedReference
    private List<BoardLike> boardLikeList;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<BoardImage> boardImageList;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<BoardComment> boardCommentList;

    @Builder
    public Board(String boardContent, LocalDateTime boardUpdateDate, int boardClass, User user, Region region, List<BoardImage> boardImageList, List<BoardLike> boardLikeList, List<BoardComment> boardCommentList) {
        this.boardContent = boardContent;
        this.boardUpdateDate = boardUpdateDate;
        this.boardClass = boardClass;
        this.user = user;
        this.region = region;
        this.boardImageList = boardImageList;
        this.boardLikeList = boardLikeList;
        this.boardCommentList = boardCommentList;
    }

    public List<String> getImageUrls() {
        List<String> result = new ArrayList<>();
        for (BoardImage image : this.boardImageList) {
            result.add(image.getBoardImageUrl());
        }
        return result;
    }

    public BoardResponse toBoardResponse(){
        return BoardResponse.builder()
                .boardId(this.getBoardId())
                .userId(this.getUser().getUserId())
                .userName(this.getUser().getUserNickname())
                .userImg(this.getUser().getUserImg())
                .boardContent(this.getBoardContent())
                .boardUpdateDate(this.getBoardUpdateDate())
                .boardClass(this.getBoardClass())
                .region(this.getRegion().getRegionAddress())
                .boardImg(this.getImageUrls())
                .likeCnt(this.getBoardLikeList().size())
                .build();
    }
}