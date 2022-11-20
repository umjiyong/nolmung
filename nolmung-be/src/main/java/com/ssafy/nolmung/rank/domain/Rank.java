package com.ssafy.nolmung.rank.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Rank {

    @Setter (AccessLevel.NONE)
    private int userId;
    private int rankScore;

    public Rank (int userId) {
        this.userId = userId;
        this.rankScore = 0;
    }
}
