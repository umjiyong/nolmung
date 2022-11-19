package com.ssafy.nolmung.board.service;

import com.ssafy.nolmung.board.dto.request.BoardLikeRequest;
import com.ssafy.nolmung.board.dto.response.BoardLikeResponse;

public interface BoardLikeService {

    // 게시물 좋아요 등록
    int addLike(BoardLikeRequest boardLikeRequest);
    // 게시물 좋아요 취소
    int cancelLike(BoardLikeRequest boardLikeRequest);
}
