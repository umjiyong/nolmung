package com.ssafy.nolmung.route.dto;

import com.ssafy.nolmung.rank.domain.Rank;
import com.ssafy.nolmung.route.domain.Coordinate;
import com.ssafy.nolmung.route.domain.Route;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class ReadRouteResponseDto {

    private int walkId;
    private List<Coordinate> coordinateList;

    public ReadRouteResponseDto(Route route) {

        this.walkId = route.getRouteId();
        coordinateList = new ArrayList<>();

        for (Coordinate c : route.getCoordinates()) {
            coordinateList.add(c);
        }
    }

}
