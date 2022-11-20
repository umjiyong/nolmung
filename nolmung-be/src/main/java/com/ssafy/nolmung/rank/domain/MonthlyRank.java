package com.ssafy.nolmung.rank.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@RedisHash(value = "monthlyRank", timeToLive = -1L)
public class MonthlyRank extends Rank{

    @Id
    private int monthlyRankId;
    public MonthlyRank(int userId) {
        super(userId);
        this.monthlyRankId = userId;
    }
}
