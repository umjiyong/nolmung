package com.ssafy.nolmung.landMark.service;

import com.ssafy.nolmung.landMark.domain.LandMark;
import com.ssafy.nolmung.landMark.domain.LandMarkBoard;
import com.ssafy.nolmung.landMark.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMark.dto.response.LandMarkBoardInfoDto;
import com.ssafy.nolmung.landMark.repository.LandMarkBoardRepository;
import com.ssafy.nolmung.landMark.repository.LandMarkRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@Transactional
public class LandMarkBoardServiceImpl implements LandMarkBoardService{
    private final LandMarkRepository landMarkRepository;
    private final LandMarkBoardRepository landMarkBoardRepository;
    private final UserRepository userRepository;

    public LandMarkBoardServiceImpl(LandMarkRepository landMarkRepository, LandMarkBoardRepository landMarkBoardRepository, UserRepository userRepository) {
        this.landMarkRepository = landMarkRepository;
        this.landMarkBoardRepository = landMarkBoardRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void createLandmarkBoard(LandmarkBoardRequestDto landmarkBoardRequestDto) {
        LandMark landmark = landMarkRepository.findById(landmarkBoardRequestDto.getLandmarkId()).get();
        User user = userRepository.findById(landmarkBoardRequestDto.getUserId()).get();
        LandMarkBoard landMarkBoard = LandMarkBoard.builder()
                .landMarkBoardContent(landmarkBoardRequestDto.getContent())
                .landMarkBoardImg(landmarkBoardRequestDto.getImageUrl())
                .landMarkBoardUpdateDate(LocalDateTime.now())
                .user(user)
                .landMark(landmark)
                .build();
        landMarkBoardRepository.save(landMarkBoard);
    }

    @Override
    public LandMarkBoardInfoDto getLandmarkBoardInfo(int landmarkBoardId) {
        LandMarkBoard board = landMarkBoardRepository.findById(landmarkBoardId).get();

        LandMarkBoardInfoDto landmarkBoardInfo = LandMarkBoardInfoDto.builder()
                .landmarkBoardId(board.getLandMarkBoardId())
                .boardImageUrl(board.getLandMarkBoardImg())
                .userImageUrl(board.getUser().getUserImg())
                .content(board.getLandMarkBoardContent())
                .userId(board.getUser().getUserId())
                .createTime(board.getLandMarkBoardUpdateDate())
                .nickname(board.getUser().getUserNickname())
                .build();

        return landmarkBoardInfo;
    }
}
