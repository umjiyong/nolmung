package com.ssafy.nolmung.landMark.service;

import com.ssafy.nolmung.landMark.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMark.dto.response.LandMarkBoardInfoDto;

public interface LandMarkBoardService {

    int createLandmarkBoard(LandmarkBoardRequestDto landmarkBoardRequestDto);

    LandMarkBoardInfoDto getLandmarkBoardInfo(int landmarkBoardId);
}
