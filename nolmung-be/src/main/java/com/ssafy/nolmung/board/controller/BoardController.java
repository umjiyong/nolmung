package com.ssafy.nolmung.board.controller;

import com.ssafy.nolmung.board.dto.response.BoardResponse;
import com.ssafy.nolmung.board.service.BoardService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/board")
@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    @ApiOperation(value = "강아지 정보 조회", notes = "puppyId로 강아지 정보 조회에 필요한 데이터를 받아오는 API")
    @RequestMapping("/{boardId}")
    public ResponseEntity getAllBoard(@PathVariable int boardId){
        List<BoardResponse> result = new ArrayList<>();
        return new ResponseEntity(result, HttpStatus.OK);
    }
}
