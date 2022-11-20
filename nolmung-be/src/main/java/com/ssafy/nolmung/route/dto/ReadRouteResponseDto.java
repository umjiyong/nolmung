package com.ssafy.nolmung.route.dto;


import com.ssafy.nolmung.route.domain.Route;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;


@Data
@AllArgsConstructor
public class ReadRouteResponseDto {

    private int routeId;
    private int walkId;
    private double lat;
    private double lon;
    private LocalDateTime registeredTime;

    public ReadRouteResponseDto(Route route) {

        this.routeId = route.getRouteId();
        this.walkId = route.getWalkId();
        this.lat = route.getLat();
        this.lon = route.getLon();
        this.registeredTime = route.getRegisteredTime();

    }

}
