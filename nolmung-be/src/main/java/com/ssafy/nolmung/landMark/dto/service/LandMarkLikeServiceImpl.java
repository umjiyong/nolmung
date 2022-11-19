package com.ssafy.nolmung.landMark.dto.service;

import com.ssafy.nolmung.landMark.domain.LandMark;
import com.ssafy.nolmung.landMark.domain.LandMarkLike;
import com.ssafy.nolmung.landMark.repository.LandMarkLikeRepository;
import com.ssafy.nolmung.landMark.repository.LandMarkRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
public class LandMarkLikeServiceImpl implements LandMarkLikeService {

    private final LandMarkLikeRepository landMarkLikeRepository;
    private final UserRepository userRepository;
    private final LandMarkRepository landMarkRepository;

    public LandMarkLikeServiceImpl(LandMarkLikeRepository landMarkLikeRepository, UserRepository userRepository, LandMarkRepository landMarkRepository) {
        this.landMarkLikeRepository = landMarkLikeRepository;
        this.userRepository = userRepository;
        this.landMarkRepository = landMarkRepository;
    }

    @Override
    public void likeLandmark(int userId, int landmarkId) {
        User user = userRepository.findById(userId).get();
        LandMark landmark = landMarkRepository.findById(landmarkId).get();
        LandMarkLike landMarkLike = LandMarkLike.builder()
                .user(user)
                .landMark(landmark)
                .build();

        landMarkLikeRepository.save(landMarkLike);
    }

    @Override
    public void cancelLikeLandmark(int userId, int landmarkId) {
        landMarkLikeRepository.deleteByLandMarkLandMarkIdAndUserUserId(landmarkId, userId);
    }
}
