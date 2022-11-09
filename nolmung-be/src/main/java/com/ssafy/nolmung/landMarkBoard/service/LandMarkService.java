package com.ssafy.nolmung.landMarkBoard.service;

import com.ssafy.nolmung.landMarkBoard.dto.request.LandMarkUserRequestDto;
import com.ssafy.nolmung.landMarkBoard.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMarkBoard.dto.response.*;

import java.util.List;

public interface LandMarkService {
    List<LandMarkListResponseDto> getLandmarkList();
    LandMarkInfoResponseDto getLandmarkInfo(int landmarkId, int userId);
    List<VisitorListResponseDto> getVisitorList(int landmarkId);

    List<LandMarkBoardListDto> getLandmarkBoardList(int landmarkId);


    boolean isLiked(int landmarkId, int userId);
}
