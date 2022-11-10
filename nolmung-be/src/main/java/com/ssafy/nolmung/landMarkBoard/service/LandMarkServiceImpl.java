package com.ssafy.nolmung.landMarkBoard.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.landMarkBoard.domain.LandMark;
import com.ssafy.nolmung.landMarkBoard.domain.LandMarkBoard;
import com.ssafy.nolmung.landMarkBoard.dto.request.LandmarkBoardRequestDto;
import com.ssafy.nolmung.landMarkBoard.dto.response.*;
import com.ssafy.nolmung.landMarkBoard.repository.LandMarkBoardRepository;
import com.ssafy.nolmung.landMarkBoard.repository.LandMarkLikeRepository;
import com.ssafy.nolmung.landMarkBoard.repository.LandMarkRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
public class LandMarkServiceImpl implements LandMarkService{

    private final LandMarkRepository landMarkRepository;
    private final LandMarkLikeRepository landMarkLikeRepository;
    private final LandMarkBoardRepository landMarkBoardRepository;
    private final UserRepository userRepository;

    public LandMarkServiceImpl(LandMarkRepository landMarkRepository, LandMarkLikeRepository landMarkLikeRepository, BoardRepository boardRepository, LandMarkBoardRepository landMarkBoardRepository, UserRepository userRepository) {
        this.landMarkRepository = landMarkRepository;
        this.landMarkLikeRepository = landMarkLikeRepository;
        this.landMarkBoardRepository = landMarkBoardRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<LandMarkListResponseDto> getLandmarkList() {
        List<LandMarkListResponseDto> landmarkMarkerList = new ArrayList<>();
        List<LandMark> landMarkList = landMarkRepository.findAll();

        for(int i = 0; i < landMarkList.size(); i++){
            LandMark landMark = landMarkList.get(i);
            LandMarkListResponseDto marker = LandMarkListResponseDto.builder()
                    .landmarkId(landMark.getLandMarkId())
                    .landMarkLat(landMark.getLandMarkLat())
                    .landMarkLon(landMark.getLandMarkLon())
                    .build();
            landmarkMarkerList.add(marker);
        }

        return landmarkMarkerList;
    }

    @Override
    public LandMarkInfoResponseDto getLandmarkInfo(int landmarkId, int userId) {
        LandMark landmark = landMarkRepository.findById(landmarkId).get();
        boolean isLike = isLiked(landmarkId, userId);

        LandMarkInfoResponseDto landmarkInfo = LandMarkInfoResponseDto.builder()
                .landmarkId(landmark.getLandMarkId())
                .landmarkImg(landmark.getLandMarkImg())
                .landmarkName(landmark.getLandMarkName())
                .isLike(isLike)
                .build();

        return landmarkInfo;
    }

    @Override
    public List<VisitorListResponseDto> getVisitorList(int landmarkId) {
        List<LandMarkBoard> landMarkBoardList = landMarkBoardRepository.findAllByLandMarkLandMarkId(landmarkId);
        List<VisitorListResponseDto> visitorList = new ArrayList<>();

        for(int i = 0; i < landMarkBoardList.size(); i++){
            User user = landMarkBoardList.get(i).getUser();
            VisitorListResponseDto visitor = new VisitorListResponseDto(user.getUserId(), user.getUserNickname(), user.getUserImg());
            visitorList.add(visitor);
        }

        return visitorList;
    }

    @Override
    public List<LandMarkBoardListDto> getLandmarkBoardList(int landmarkId) {
        List<LandMarkBoard> boards = landMarkBoardRepository.findAllByLandMarkLandMarkId(landmarkId);
        List<LandMarkBoardListDto> landMarkBoardList = new ArrayList<>();

        for(int i = 0; i < boards.size(); i++){
            LandMarkBoard board = boards.get(i);
            LandMarkBoardListDto boardInfo = LandMarkBoardListDto.builder()
                    .boardImage(board.getLandMarkBoardImg())
                    .content(board.getLandMarkBoardContent())
                    .createDate(board.getLandMarkBoardUpdateDate())
                    .nickname(board.getUser().getUserNickname())
                    .build();
            landMarkBoardList.add(boardInfo);
        }

        return landMarkBoardList;
    }


    @Override
    public boolean isLiked(int landmarkId, int userId) {
        int likeCount = landMarkLikeRepository.countByLandMarkLandMarkIdAndUserUserId(landmarkId, userId);
        if(likeCount == 1) {
            return true;
        }
        else {
            return false;
        }
    }

}
