package com.ssafy.nolmung.puppy.service;

import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;

import java.util.List;

public interface PuppyService {

    void insertPuppy(PuppyInfoRequestDto puppyInfoRequestDto);

    PuppyInfoResponseDto getPuppyInfo(int puppyId);

    List<PuppyListResponseDto> getMyPuppyList(int userId);

    PuppyListResponseDto searchPuppyByCode(String puppyCode);

    void registerMyPuppy(int puppyId, int userId);
}
