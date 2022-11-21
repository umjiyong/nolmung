package com.ssafy.nolmung.landMark.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.landMark.domain.LandMark;
import com.ssafy.nolmung.landMark.domain.LandMarkBoard;
import com.ssafy.nolmung.landMark.dto.response.*;
import com.ssafy.nolmung.landMark.repository.LandMarkBoardRepository;
import com.ssafy.nolmung.landMark.repository.LandMarkLikeRepository;
import com.ssafy.nolmung.landMark.repository.LandMarkRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    private final int EARTH_RADIUS = 6371;

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
                    .latitude(landMark.getLandMarkLat())
                    .longitude(landMark.getLandMarkLon())
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
                    .createDate(board.getLandMarkBoardUpdateDate().toLocalDate())
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

    @Override
    public List<LandMarkListResponseDto> getNearLandmarkList(double curLat, double curLon) {
        List<LandMark> landMarkList = landMarkRepository.findAll();
        List<LandMarkListResponseDto> nearMarkerList = new ArrayList<>();

        for(int i = 0; i < landMarkList.size(); i++){
            LandMark landmark = landMarkList.get(i);
            double distance = getDistance(landmark.getLandMarkLat(), landmark.getLandMarkLon(), curLat, curLon);
            if(distance <= 1000){
                LandMarkListResponseDto nearLandmark = LandMarkListResponseDto.builder()
                        .landmarkId(landmark.getLandMarkId())
                        .latitude(landmark.getLandMarkLat())
                        .longitude(landmark.getLandMarkLon())
                        .distance(distance)
                        .build();
                nearMarkerList.add(nearLandmark);
            }

        }

        return nearMarkerList;
    }

    @Override
    public double getDistance(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat/2)* Math.sin(dLat/2)+ Math.cos(Math.toRadians(lat1))* Math.cos(Math.toRadians(lat2))* Math.sin(dLon/2)* Math.sin(dLon/2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        double d =EARTH_RADIUS* c * 1000;    // Distance in m
        return d;
    }

}
