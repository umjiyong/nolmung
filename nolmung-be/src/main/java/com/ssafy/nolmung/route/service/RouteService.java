package com.ssafy.nolmung.route.service;

import com.ssafy.nolmung.route.domain.Coordinate;
import com.ssafy.nolmung.route.domain.Route;
import com.ssafy.nolmung.route.repository.RouteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RouteService {

    private final RouteRepository routeRepository;

    @Transactional
    public void registRoute (int walkId, double lat, double lon) {
        Route tempRoute = routeRepository.findById(walkId).get();
        tempRoute.getCoordinates().add(new Coordinate(lat,lon, LocalDateTime.now()));
        routeRepository.save(tempRoute);
    }

    public Route readRoute(int walkId) {

      return routeRepository.findById(walkId).get();
    }


}
