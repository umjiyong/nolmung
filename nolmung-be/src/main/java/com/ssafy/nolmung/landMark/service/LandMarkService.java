package com.ssafy.nolmung.landMark.service;

import com.ssafy.nolmung.landMark.dto.response.*;

import java.util.List;

public interface LandMarkService {
    List<LandMarkListResponseDto> getLandmarkList();
    LandMarkInfoResponseDto getLandmarkInfo(int landmarkId, int userId);
    List<VisitorListResponseDto> getVisitorList(int landmarkId);

    List<LandMarkBoardListDto> getLandmarkBoardList(int landmarkId);


    boolean isLiked(int landmarkId, int userId);
}
