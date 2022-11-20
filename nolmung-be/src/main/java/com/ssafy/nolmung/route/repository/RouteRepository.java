package com.ssafy.nolmung.route.repository;

import com.ssafy.nolmung.route.domain.Route;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RouteRepository extends CrudRepository<Route,Integer> {

   Iterable<Route> findAllByWalkId(int walkId);
}
