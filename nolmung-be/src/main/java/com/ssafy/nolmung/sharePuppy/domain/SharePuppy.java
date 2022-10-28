package com.ssafy.nolmung.sharePuppy.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access  = AccessLevel.PROTECTED)
public class SharePuppy {

    @Column(name = "share_puppy_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sharePuppyId;

    @Column(name = "share_puppy_create_date")
    private LocalDateTime sharePuppyCreateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "puppy_id")
    @JsonBackReference
    private Puppy puppy;

    @Builder
    public SharePuppy(int sharePuppyId, LocalDateTime sharePuppyCreateDate, User user, Puppy puppy) {
        this.sharePuppyId = sharePuppyId;
        this.sharePuppyCreateDate = sharePuppyCreateDate;
        this.user = user;
        this.puppy = puppy;
    }
}
