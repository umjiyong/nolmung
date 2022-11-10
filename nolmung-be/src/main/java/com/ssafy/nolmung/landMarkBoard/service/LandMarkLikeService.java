package com.ssafy.nolmung.landMarkBoard.service;

public interface LandMarkLikeService {
    void likeLandmark(int userId, int landmarkId);
    void cancelLikeLandmark(int userId, int landmarkId);
}
