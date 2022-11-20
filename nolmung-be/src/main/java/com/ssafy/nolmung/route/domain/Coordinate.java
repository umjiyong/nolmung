package com.ssafy.nolmung.route.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class Coordinate {
    private double lat;
    private double lon;
    private LocalDateTime registeredTime;
}
