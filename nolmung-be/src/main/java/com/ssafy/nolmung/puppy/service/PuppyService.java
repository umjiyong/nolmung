package com.ssafy.nolmung.puppy.service;

import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoUpdateRequestDto;
import com.ssafy.nolmung.puppy.dto.response.BreedListResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;

import java.lang.reflect.MalformedParameterizedTypeException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface PuppyService {

    void insertPuppy(PuppyInfoRequestDto puppyInfoRequestDto);

    PuppyInfoResponseDto getPuppyInfo(int puppyId);

    List<HashMap<String, Object>> getMyPuppyList(int userId);

    PuppyListResponseDto searchPuppyByCode(String puppyCode);

    void shareAndRegisterMyPuppy(int puppyId, int userId);

    void updatePuppyInfo(PuppyInfoUpdateRequestDto puppyInfoUpdateRequestDto);

    void deletePuppyInfo(int puppyId, int userId);

    int getPuppyAge(LocalDate birthDate);

    List<BreedListResponseDto> getBreedList();
}
