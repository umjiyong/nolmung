package com.ssafy.nolmung.rank.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@RedisHash(value = "weeklyRank", timeToLive = -1L)
public class WeeklyRank extends Rank{

    @Id
    private int weeklyRankId;
    public WeeklyRank(int userId) {
        super(userId);
        this.weeklyRankId = userId;
    }
}
