package com.ssafy.nolmung.landMarkBoard.service;

import com.ssafy.nolmung.landMarkBoard.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMarkBoard.dto.response.LandMarkBoardInfoDto;

public interface LandMarkBoardService {

    void createLandmarkBoard(LandmarkBoardRequestDto landmarkBoardRequestDto);

    LandMarkBoardInfoDto getLandmarkBoardInfo(int landmarkBoardId);
}
