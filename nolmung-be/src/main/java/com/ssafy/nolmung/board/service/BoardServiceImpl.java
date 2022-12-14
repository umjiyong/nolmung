package com.ssafy.nolmung.board.service;

import com.ssafy.nolmung.board.Repository.BoardRepository;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.board.domain.BoardImage;
import com.ssafy.nolmung.board.dto.request.BoardRequest;
import com.ssafy.nolmung.board.dto.response.BoardResponse;
import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.region.repository.RegionRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import com.ssafy.nolmung.user.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private FriendRepository friendRepository;

    @Override
    @Transactional
    public int createBoard(BoardRequest boardRequest) {
        User user = userRepository.findById(boardRequest.getUserId()).orElseThrow();
        Board board = Board.builder()
                .boardContent(boardRequest.getBoardContent())
                .boardUpdateDate(LocalDateTime.now())
                .boardClass(boardRequest.getBoardClass())
                .user(user)
                .region(user.getRegion())
                .build();

        Board newBoard = boardRepository.save(board);
        // save 실패 시 에러 처리 필요
        if(newBoard==null) {
            return -1;
        } else return newBoard.getBoardId();
    }

    // 전체 게시물 조회
    @Override
    public List<BoardResponse> searchAllBoard() {
        List<Board> boards = boardRepository.findAll();
        List<BoardResponse> result = new ArrayList<>();

        for (Board board: boards) {
            result.add(board.toBoardResponse());
        }
        // 게시물이 존재하지 않으면 빈 리스트 반환
        return result;
    }

    @Override
    public long countUserBoard(int userId) {
        long result = boardRepository.countByUser_UserId(userId);
        return result;
    }

    // 특정 사용자의 게시물 조회
    @Override
    public List<BoardResponse> searchUserBoard(int userId) {
        if(userRepository.findById(userId).isPresent()) {
            List<Board> boards = boardRepository.findAllByUser_UserId(userId);
            List<BoardResponse> result = new ArrayList<>();

            for (Board board : boards) {
                result.add(board.toBoardResponse());
            }
            // 게시물이 존재하지 않으면 빈 리스트 반환
            return result;
        } else {
            // 존재하지 않는 사용자라면 null 반환
            return null;
        }
    }

    // 특정 게시물 조회
    @Override
    public BoardResponse searchBoard(int boardId) {
        if(boardRepository.findById(boardId).isPresent()) {
            Board board = boardRepository.findByBoardId(boardId);
            return board.toBoardResponse();
        } else {
            return null;
        }
    }

    // 카테고리별 게시물 조회
    @Override
    public List<BoardResponse> searchAllByBoardCategory(int boardCategory) {
        List<Board> boards = boardRepository.findAllByBoardClass(boardCategory);
        List<BoardResponse> result = new ArrayList<>();

        for (Board board: boards) {
            result.add(board.toBoardResponse());
        }
        return result;
    }

    @Override
    public List<BoardResponse> searchFriendBoard(int userId) {
        List<Friend> friends = friendRepository.findFriendListByUserId(userId);
        List<BoardResponse> result = new ArrayList<>();

        for (Friend friend : friends) {
            List<Board> boards = boardRepository.findAllByUser_UserId(friend.getSubUserId());
            for (Board board : boards) {
                result.add(board.toBoardResponse());
            }
        }
        return result;
    }

    @Override
    public List<BoardResponse> searchTownBoard(int userId) {
        List<BoardResponse> result = new ArrayList<>();

        int regionId = userRepository.findById(userId).orElseThrow().getRegion().getRegionId();
        String nearRegionInfo = regionRepository.findById(regionId).orElseThrow().getNearRegionId();
        List<String> nearRegions = new ArrayList<String>(Arrays.asList(nearRegionInfo.split(",")));
        nearRegions.add(Integer.toString(regionId));

        for (String nearRegion : nearRegions) {
            int nearRegionId = Integer.parseInt(nearRegion);
            List<Board> boards = boardRepository.findAllByRegion_RegionId(nearRegionId);
            for (Board board : boards) {
                result.add(board.toBoardResponse());
            }
        }
        return result;
    }


    // 게시물 삭제(이미지 삭제는 따로 처리)
    @Override
    @Transactional
    public int deleteBoard(int boardId) {
        // 존재하는 게시물일 경우 삭제 후 boardId 리턴
        if(boardRepository.findById(boardId).isPresent()) {
            boardRepository.deleteByBoardId(boardId);
            return boardId;
        } else {
            // 존재하지 않는 게시물일 경우 -1 리턴
            return -1;
        }
    }
}
