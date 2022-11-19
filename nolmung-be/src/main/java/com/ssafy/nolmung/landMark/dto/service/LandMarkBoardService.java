package com.ssafy.nolmung.landMark.dto.service;

import com.ssafy.nolmung.landMark.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMark.dto.response.LandMarkBoardInfoDto;

public interface LandMarkBoardService {

    void createLandmarkBoard(LandmarkBoardRequestDto landmarkBoardRequestDto);

    LandMarkBoardInfoDto getLandmarkBoardInfo(int landmarkBoardId);
}
