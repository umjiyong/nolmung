package com.ssafy.nolmung.boardComment.controller;

import com.ssafy.nolmung.boardComment.dto.request.BoardUserRequestDto;
import com.ssafy.nolmung.boardComment.dto.response.MyCommentResponseDto;
import com.ssafy.nolmung.boardComment.service.BoardCommentService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class BoardCommentController {

    private final BoardCommentService boardCommentService;

    @ApiOperation(value = "내가 작성한 댓글 전체 목록 조회", notes = "userId를 파라미터로 받아, 사용자가 작성한 댓글의 전체 목록을 조회하여 반환하는 API")
    @GetMapping("/myList/{userId}")
    public ResponseEntity getMyCommentList(@PathVariable int userId){
        HashMap<String, Object> result = new HashMap<>();
        log.info("내가 작성한 댓글 전체 목록 조회");
        try {
            List<MyCommentResponseDto> myCommentList = boardCommentService.getMyCommentList(userId);

            result.put("myCommentList", myCommentList);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            result.put("userId", userId);
            result.put("message", "내가 작성한 댓글 목록 조회 에러 발생!!");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "게시글 내 전체 댓글 조회", notes = "")
    @GetMapping("/list")
    public ResponseEntity getCommentList(@RequestBody BoardUserRequestDto boardUserRequestDto) {
        HashMap<String,Object> result = new HashMap<>();

        try {
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }

    }

    @ApiOperation(value = "", notes = "")
    @PostMapping
    public ResponseEntity ex1(){
        HashMap<String,Object> result = new HashMap<>();

        try {
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


    @ApiOperation(value = "", notes = "")
    @DeleteMapping
    public ResponseEntity ex3(){
        HashMap<String,Object> result = new HashMap<>();

        try {
            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

}
