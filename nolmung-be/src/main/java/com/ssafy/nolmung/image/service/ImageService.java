package com.ssafy.nolmung.image.service;

import com.ssafy.nolmung.board.domain.BoardImage;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface ImageService {

    List<String> uploadBoardImages(int boardId, List<MultipartFile> files);
    void deleteBoardImages(List<String> imageUrls);
    String uploadImage(String path, MultipartFile file);

    String uploadPuppyImage(int puppyId, MultipartFile file);

    String uploadlandmarkBoardImage(int landmarkBoardId, MultipartFile file);

    String uploadWalkImage(int walkId, MultipartFile file);

}
