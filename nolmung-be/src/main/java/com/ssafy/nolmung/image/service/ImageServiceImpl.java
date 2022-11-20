package com.ssafy.nolmung.image.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.BoardImage;
import com.ssafy.nolmung.global.util.Util;
import com.ssafy.nolmung.image.ImageRepository;
import com.ssafy.nolmung.landMark.domain.LandMarkBoard;
import com.ssafy.nolmung.landMark.repository.LandMarkBoardRepository;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.repository.PuppyRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import com.ssafy.nolmung.walk.domain.Walk;
import com.ssafy.nolmung.walk.repository.WalkRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageServiceImpl implements ImageService {

    @Autowired
    Util.ImageUtil imageUtil;
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    BoardRepository boardRepository;

    @Autowired
    PuppyRepository puppyRepository;

    private final UserRepository userRepository;

    @Autowired
    LandMarkBoardRepository landMarkBoardRepository;

    @Autowired
    WalkRepository walkRepository;

    @Override
    @Transactional
    public List<String> uploadBoardImages(int boardId, List<MultipartFile> files) {
        List<String> result = new ArrayList<>();
        for (MultipartFile file : files) {
            String imageUrl = imageUtil.uploadImage("board", file);
            result.add(imageUrl);
            BoardImage newBoardImage = BoardImage.builder()
                    .board(boardRepository.findById(boardId).orElseThrow())
                    .boardImageUrl(imageUrl).build();
            newBoardImage = imageRepository.save(newBoardImage);
            // 에러 처리 필요
        }
        return result;
    }

    @Override
    @Transactional
    public void deleteBoardImages(List<String> imageUrls) {
        for (String url : imageUrls) {
            imageUtil.deleteImage(url);
        }
    }

    @Override
    @Transactional
    public String uploadImage(String path, MultipartFile file) {
        String imageUrl = imageUtil.uploadImage(path, file);
        return imageUrl;
    }

    @Override
    @Transactional
    public String uploadPuppyImage(int puppyId, MultipartFile file){
        String imageUrl = uploadImage("puppy", file);
        Puppy puppy = puppyRepository.findById(puppyId).get();
        puppy.changePuppyImage(imageUrl);
        puppyRepository.save(puppy);
        return puppy.getPuppyImg();
    }

    @Override
    @Transactional
    public String uploadUserImage(int userId, MultipartFile file){
        String imageUrl = uploadImage("user", file);
        User user = userRepository.findById(userId).get();
        user.changeUserImage(imageUrl);
        userRepository.save(user);
        return user.getUserImg();
    }

    @Override
    @Transactional
    public String uploadlandmarkBoardImage(int landmarkBoardId, MultipartFile file) {
        String imageUrl = uploadImage("landmarkBoard", file);
        LandMarkBoard landMarkBoard = landMarkBoardRepository.findById(landmarkBoardId).get();
        landMarkBoard.changeBoardImage(imageUrl);
        landMarkBoardRepository.save(landMarkBoard);
        return landMarkBoard.getLandMarkBoardImg();
    }

    @Override
    @Transactional
    public String uploadWalkImage(int walkId, MultipartFile file) {
        String imageUrl = uploadImage("walk", file);
        Walk walk = walkRepository.findById(walkId).get();
        walk.changeWalkImage(imageUrl);
        walkRepository.save(walk);
        return walk.getWalkUserImg();
    }

}
