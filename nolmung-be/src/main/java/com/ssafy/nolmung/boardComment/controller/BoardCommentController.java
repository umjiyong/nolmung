package com.ssafy.nolmung.boardComment.controller;

import com.ssafy.nolmung.boardComment.dto.request.BoardCommentRequestDto;
import com.ssafy.nolmung.boardComment.dto.request.BoardUserRequestDto;
import com.ssafy.nolmung.boardComment.dto.request.UserCommentRequestDto;
import com.ssafy.nolmung.boardComment.dto.response.BoardCommentResponseDto;
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
            result.put("message", "[error] - 내가 작성한 댓글 목록 조회");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @ApiOperation(value = "게시글 내 전체 댓글 조회", notes = "boardId로 조회된 게시글 내의 모든 댓글을 조회, 이때 userId로 내 댓글인지 여부를 같이 판단")
    @PostMapping("/list")
    public ResponseEntity getCommentList(@RequestBody BoardUserRequestDto boardUserRequestDto) {
        HashMap<String,Object> result = new HashMap<>();

        try {
            List<BoardCommentResponseDto> commentList = boardCommentService.getBoardCommentList(boardUserRequestDto.getUserId(), boardUserRequestDto.getBoardId());

            result.put("commentCount", commentList.size());
            result.put("commentList", commentList);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("boardId", boardUserRequestDto.getBoardId());
            result.put("message", "[error] - 게시글 내 전체 댓글 조회");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }

    }

    @ApiOperation(value = "댓글 등록", notes = "boardId, userId, content로 게시글 내에 댓글 등록")
    @PostMapping
    public ResponseEntity insertComment(@RequestBody BoardCommentRequestDto boardCommentRequestDto){
        HashMap<String,Object> result = new HashMap<>();

        try {
            int boardId = boardCommentRequestDto.getBoardId();
            int userId = boardCommentRequestDto.getUserId();
            String content = boardCommentRequestDto.getContent();

            boardCommentService.insertComment(boardId, userId, content);

            result.put("comment", content);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("userId", boardCommentRequestDto.getUserId());
            result.put("message", "[error] - 댓글 등록");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }


    @ApiOperation(value = "댓글 삭제", notes = "boardCommentId와 userId로 조회한 댓글 삭제")
    @DeleteMapping("/{boardCommentId}")
    public ResponseEntity deleteComment(@PathVariable int boardCommentId, @RequestParam int userId){
        HashMap<String,Object> result = new HashMap<>();

        try {

            boardCommentService.deleteComment(userId, boardCommentId);

            result.put("boardCommentId", boardCommentId);
            result.put("message", "success");

            return new ResponseEntity(result, HttpStatus.OK);
        }catch (Exception e){

            result.put("boardCommentId", boardCommentId);
            result.put("message", "[error] - 댓글 삭제");

            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

}
