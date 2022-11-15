package com.ssafy.nolmung.walk.service;

import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoUpdateRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;
import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

public interface WalkService {

    void insertWalkRecord(WalkRecordRequestDto walkRecordRequestDto);

    double getWalkAttainment(int walkDistance);
}
