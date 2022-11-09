package com.ssafy.nolmung.rank.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@RedisHash(value = "dailyRank", timeToLive = -1L)
public class DailyRank extends Rank{

    @Id
    private int dailyRankId;

    public DailyRank(int userId) {
        super(userId);
        this.dailyRankId = userId;
    }
}
