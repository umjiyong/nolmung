package com.ssafy.nolmung.route.service;


import com.ssafy.nolmung.route.domain.Route;
import com.ssafy.nolmung.route.repository.RouteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RouteService {

    private final RouteRepository routeRepository;

    @Transactional
    public void registRoute (int walkId, double lat, double lon) {
        Route tempRoute = new Route(walkId, lat, lon);
        routeRepository.save(tempRoute);
    }

    public List<Route> readRoute(int walkId) {

        List<Route> routeList = new ArrayList<>();

      routeRepository.findAllByWalkId(walkId).forEach(e -> routeList.add(e));

      return routeList;
    }


}
