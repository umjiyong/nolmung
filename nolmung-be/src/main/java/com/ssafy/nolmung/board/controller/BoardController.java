package com.ssafy.nolmung.board.controller;

import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.dto.request.BoardLikeRequest;
import com.ssafy.nolmung.board.dto.request.BoardRequest;
import com.ssafy.nolmung.board.dto.response.BoardResponse;
import com.ssafy.nolmung.board.service.BoardLikeService;
import com.ssafy.nolmung.board.service.BoardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/board")
@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardLikeService boardLikeService;

    @GetMapping
    @ApiOperation(value = "전체 게시물 조회", notes = "전체 게시물의 데이터를 받아오는 API")
    public ResponseEntity getAllBoard() {
        List<BoardResponse> result = boardService.searchAllBoard();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @ApiOperation(value = "특정 게시물 조회", notes = "특정 게시물의 데이터를 받아오는 API")
    @GetMapping("/{boardId}")
    public ResponseEntity getBoardbyBoardId(@PathVariable int boardId) {
        BoardResponse result = boardService.searchBoard(boardId);
        if(!result.equals(null)) {
            return new ResponseEntity(result, HttpStatus.OK);
        } else { // 존재하지 않는 게시물 id인 경우
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    // 사용자의 게시물 수 조회
    @ApiOperation(value = "특정 사용자의 게시물 수 조회", notes = "특정 사용자의 게시물 수를 받아오는 API")
    @GetMapping("/count/{userId}")
    public ResponseEntity getBoardCountByUserId(@PathVariable int userId) {
        long result = boardService.countUserBoard(userId);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    // 사용자의 전체 게시물 조회
    @ApiOperation(value = "특정 사용자의 게시물 조회", notes = "특정 사용자의 게시물 데이터를 받아오는 API")
    @GetMapping("/user/{userId}")
    public ResponseEntity getBoardByUserId(@PathVariable int userId){
        List<BoardResponse> result = boardService.searchUserBoard(userId);
        if(!result.equals(null)) {
            return new ResponseEntity(result, HttpStatus.OK);
        } else { // 존재하지 않는 사용자 id인 경우
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
    // 카테고리별 게시물 조회
    @ApiOperation(value = "게시판 주제별 게시물 조회", notes = "특정 게시판(자유게시판 등)의 게시물 데이터를 받아오는 API")
    @GetMapping("/category/{boardClass}")
    public ResponseEntity getBoardByBoardClass(@PathVariable int boardClass) {
        List<BoardResponse> result = boardService.searchAllByBoardCategory(boardClass);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @ApiOperation(value = "우리 동네 게시판 조회", notes = "지역 id를 기준으로 근처 지역의 게시물 데이터를 받아오는 API")
    @GetMapping("/region/{userId}")
    public ResponseEntity getTownBoard(@PathVariable int userId) {
        List<BoardResponse> result = boardService.searchTownBoard(userId);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @ApiOperation(value = "친구 게시판 조회", notes = "친구들의 게시물 데이터를 받아오는 API")
    @GetMapping("/friend/{userId}")
    public ResponseEntity getFriendBoard(@PathVariable int userId) {
        List<BoardResponse> result = boardService.searchFriendBoard(userId);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    // 게시물 업로드
    @ApiOperation(value = "게시물 등록", notes = "등록할 게시물 데이터를 받아오는 API")
    @PostMapping
    public ResponseEntity createBoard(@RequestBody @Valid BoardRequest boardRequest) {
        int result = boardService.createBoard(boardRequest);
        if(result>0){
            return new ResponseEntity(result, HttpStatus.OK);
        } else {
            return new ResponseEntity(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 게시물 삭제
    @ApiOperation(value = "게시물 삭제", notes = "게시물을 삭제하는 API")
    @DeleteMapping("/{boardId}")
    public ResponseEntity deleteBoard(@PathVariable int boardId) {
        int result = boardService.deleteBoard(boardId);

        if(result > 0) {
            return new ResponseEntity(result, HttpStatus.OK);
        } else {
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "게시물 좋아요 등록", notes = "게시물에 좋아요를 추가하는 API")
    @PostMapping("/like")
    public ResponseEntity likeBoard(@RequestBody @Valid BoardLikeRequest boardLikeRequest) {
        int result = boardLikeService.addLike(boardLikeRequest);
        if(result<=0){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @ApiOperation(value = "게시물 좋아요 취소", notes = "게시물에 좋아요를 취소하는 API")
    @PostMapping("/dislike")
    public ResponseEntity dislikeBoard(@RequestBody @Valid BoardLikeRequest boardLikeRequest) {
        int result = boardLikeService.cancelLike(boardLikeRequest);
        if (result<=0){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

}
