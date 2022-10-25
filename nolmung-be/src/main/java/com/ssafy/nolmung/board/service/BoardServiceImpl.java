//package com.ssafy.nolmung.board.service;
//
//import com.ssafy.nolmung.board.Repository.BoardRepository;
//import com.ssafy.nolmung.board.domain.Board;
//import com.ssafy.nolmung.board.dto.request.BoardRequest;
//import com.ssafy.nolmung.board.dto.response.BoardResponse;
//import com.ssafy.nolmung.region.domain.Region;
//import com.ssafy.nolmung.user.domain.User;
//import com.ssafy.nolmung.user.repository.UserRepositoryImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class BoardServiceImpl implements BoardService {
//
//    @Autowired
//    private BoardRepository boardRepository;
//    @Autowired
//    private UserRepositoryImpl userRepository; // 수정 필요
//
//    @Override
//    public int createBoard(BoardRequest boardRequest) {
////        User user = userRepository.findByUserId(boardRequest.getUserId())
//        User user = null;
//        Region region = null;
//        Board board = Board.builder()
//                .boardContent(boardRequest.getBoardContent())
//                .boardUpdateDate(LocalDateTime.now())
//                .boardClass(boardRequest.getBoardClass())
//                .user(user)
//                .region(region)
//                .boardImageList(new ArrayList<>()) // 수정 필요
//                .build();
//
//        Board newBoard = boardRepository.save(board);
//        // save 실패 시 에러 처리 필요
//        if(newBoard==null) {
//            return -1;
//        } else return newBoard.getBoardId();
//    }
//
//    @Override
//    public List<BoardResponse> searchAllBoard() {
//        List<Board> boards = boardRepository.findAll();
//        List<BoardResponse> result = new ArrayList<>();
//
//        for (Board board : boards) {
//            result.add(BoardResponse.builder()
//                    .boardContent(board.getBoardContent())
//                    .boardUpdateDate(board.getBoardUpdateDate())
//                    .boardClass(board.getBoardClass())
//                    .boardImg(null) // 수정 필요
//                    .build());
//        }
//        return result;
//    }
//
//    @Override
//    public List<BoardResponse> searchUserBoard(int userId) {
//        List<Board> boards = boardRepository.findAllByUser_UserId(userId);
//        return null;
//    }
//
//    @Override
//    public BoardResponse searchBoard(int boardId) {
//        Board boards = boardRepository.findByBoardId(boardId);
//        return null;
//    }
//
//    @Override
//    public List<BoardResponse> searchAllByBoardCategory(int boardCategory) {
//        return null;
//    }
//
//    @Override
//    public int deleteBoard(int boardId) {
//        return 0;
//    }
//}
