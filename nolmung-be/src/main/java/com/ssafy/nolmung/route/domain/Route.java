package com.ssafy.nolmung.route.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RedisHash(value = "route", timeToLive = -1L)
public class Route
{
    @Id
    private int routeId;
    @Indexed
    private int walkId;

    private double lat;
    private double lon;
    private LocalDateTime registeredTime;


    public Route (int walkId,double lat, double lon) {
        this.walkId = walkId;
        this.lat = lat;
        this.lon = lon;
        this.registeredTime = LocalDateTime.now();
    }

}
