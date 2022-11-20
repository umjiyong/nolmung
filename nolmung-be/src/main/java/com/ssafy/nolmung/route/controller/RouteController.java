package com.ssafy.nolmung.route.controller;

import com.ssafy.nolmung.route.domain.Route;
import com.ssafy.nolmung.route.dto.ReadRouteResponseDto;
import com.ssafy.nolmung.route.dto.RegistRouteRequestDto;
import com.ssafy.nolmung.route.service.RouteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/route")
@RequiredArgsConstructor
public class RouteController {

    private final RouteService routeService;

    @PostMapping("/regist/{walkId}")
    public void registRoute (@PathVariable("walkId") int walkId, @RequestBody RegistRouteRequestDto request){

        routeService.registRoute(walkId, request.getLat(), request.getLon());
    }

    @GetMapping("{walkId}")
    public List<ReadRouteResponseDto> readRoute (@PathVariable("walkId") int walkId){

        List<ReadRouteResponseDto> responseList = new ArrayList<>();

        for (Route r : routeService.readRoute(walkId)){
            responseList.add(new ReadRouteResponseDto(r));
        }


        return responseList;
    }

}
