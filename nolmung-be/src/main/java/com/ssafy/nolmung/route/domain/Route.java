package com.ssafy.nolmung.route.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.redis.core.RedisHash;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RedisHash(value = "route", timeToLive = -1L)
public class Route
{
    @Id
    private int routeId;
    private List<Coordinate> coordinates;

    public Route (int walkId) {
        this.routeId = walkId;
        this.coordinates = new ArrayList<>();
    }

}
