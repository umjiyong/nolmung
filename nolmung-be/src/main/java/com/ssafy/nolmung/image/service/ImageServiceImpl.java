package com.ssafy.nolmung.image.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.BoardImage;
import com.ssafy.nolmung.global.util.Util;
import com.ssafy.nolmung.image.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    Util.ImageUtil imageUtil;
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    BoardRepository boardRepository;

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
}
