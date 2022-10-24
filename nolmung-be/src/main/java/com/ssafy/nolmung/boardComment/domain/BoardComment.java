package com.ssafy.nolmung.boardComment.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BoardComment {

    @Column(name = "board_comment_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardCommentId;

    @Column(name = "board_comment_content")
    private String boardCommentContent;

    @Column(name = "board_comment_ update_date")
    private LocalDateTime boardCommentUpdateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "board_id")
//    @JsonBackReference
//    private Board board;

    @Builder
    public BoardComment(int boardCommentId, String boardCommentContent, LocalDateTime boardCommentUpdateDate, User user) {
        this.boardCommentId = boardCommentId;
        this.boardCommentContent = boardCommentContent;
        this.boardCommentUpdateDate = boardCommentUpdateDate;
        this.user = user;
//        this.board = board;
    }
}
