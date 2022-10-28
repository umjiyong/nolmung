package com.ssafy.nolmung.user.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.nolmung.InAppAlarm.domain.InAppAlarm;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.domain.BoardLike;
import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.familyConnect.domain.FamilyConnect;
import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.global.util.SHA256;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkBoard;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkLike;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.walk.domain.Walk;
import lombok.*;

import javax.persistence.*;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Column(name = "user_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @JoinColumn(name = "region_id")
    @ManyToOne(fetch= FetchType.LAZY)
    @JsonBackReference
    private Region region;

    @Column(name = "user_introduction")
    private String userIntroduction;

    @Column(name = "user_lat")
    private double userLat;

    @Column(name = "user_lot")
    private double userLot;

    @Column(name = "user_address_text")
    private String userAddressText;

    @Column(name = "user_code")
    private String userCode;

    @Column(name = "user_score")
    private int userScore;

    @Column(name = "user_update_date")
    private LocalDateTime userUpdateDate;

    @Column(name = "user_img")
    private String userImg;

    @Column(name = "user_nickname")
    private String userNickname;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_kakao_uuid")
    private String userKakaoUuid;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<FamilyConnect> familyConnects = new ArrayList<>();

    @OneToMany(mappedBy = "user" ,fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Walk> walks = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<InAppAlarm> inAppAlarms = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Friend> friends = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Block> blocks = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Puppy> puppies = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<LandMarkBoard> landMarkBoards = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<LandMarkLike> landMarkLikes = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<BoardComment> boardComments = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @JsonIgnore
    private List<BoardLike> boardLikes = new ArrayList<>();


    @Builder
    public User (int userId,
                 Region region,
                 String userIntroduction,
                 double userLat,
                 double userLot,
                 String userAddressText,
                 String userCode,
                 int userScore,
                 LocalDateTime userUpdateDate,
                 String userImg,
                 String userNickname,
                 String userEmail,
                 String userKakaoUuid
                 ) {

        SHA256 sha256 = new SHA256();

        try {
            this.userKakaoUuid = sha256.encrypt(LocalDateTime.now().toString()+userKakaoUuid.substring(0, 3));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.userId = userId;
        this.region = region;
        this.userIntroduction = userIntroduction;
        this.userLat = userLat;
        this.userLot = userLot;
        this.userAddressText = userAddressText;
        this.userCode = userCode;
        this.userScore = userScore;
        this.userUpdateDate = userUpdateDate;
        this.userImg = userImg;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
    }
}
