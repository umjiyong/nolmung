package com.ssafy.nolmung.friend.controller;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import com.ssafy.nolmung.friend.dto.request.DeleteFriendRequestDto;
import com.ssafy.nolmung.friend.dto.request.SendFriendProposalRequestDto;
import com.ssafy.nolmung.friend.dto.response.ReadFriendProposalResponseDto;
import com.ssafy.nolmung.friend.dto.response.ReadFriendResponseDto;
import com.ssafy.nolmung.friend.service.BlockService;
import com.ssafy.nolmung.friend.service.FriendProposalService;
import com.ssafy.nolmung.friend.service.FriendService;
import com.ssafy.nolmung.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/friend")
@Slf4j
public class FriendController {

    private UserService userService;
    private final FriendService friendService;
    private final BlockService blockService;

    private final FriendProposalService friendProposalService;

    @GetMapping("/{userId}")
    public List<ReadFriendResponseDto> readFriendList (@RequestParam("userId") int userId){

        List<Friend> friendList = friendService.findFriendListByUserId(userId);
        List<ReadFriendResponseDto> resultFriendList = new ArrayList<>();

        for (Friend f : friendList) {
            resultFriendList.add(new ReadFriendResponseDto(f));
        }

        return resultFriendList;
    }

    @GetMapping("/proposal/{userId}")
    public List<ReadFriendProposalResponseDto> readFriendProposalList (@RequestParam("userId") int userId){

        List<FriendProposal> friendProposalList = friendProposalService.findFriendListByToUserId(userId);
        List<ReadFriendProposalResponseDto> resultFriendProposalList = new ArrayList<>();

        for (FriendProposal fp : friendProposalList) {
            resultFriendProposalList.add(new ReadFriendProposalResponseDto(fp));
        }

        return resultFriendProposalList;
    }


    @PostMapping("/send")
    public String sendFriendProposal (@RequestBody SendFriendProposalRequestDto request) {

        //이미 친구인지 체크하는 것 넣어야함

        FriendProposal tempFriendProposal = FriendProposal.builder()
                               .toUserId(request.getToUserId())
                               .fromUserId(request.getFromUserId())
                               .build();

        friendProposalService.regist(tempFriendProposal);

        return "친구신청 완료";
    }

    @PostMapping("proposal/{friendProposalId}")
    public String acceptFriendProposal (@RequestParam("friendProposalId") int friendProposalId) {

        FriendProposal tempFriendProposal = friendProposalService.findById(friendProposalId);

        int userId1 = tempFriendProposal.getFromUserId();
        int userId2 = tempFriendProposal.getToUserId();

//        friendService.regist(new Friend(유저서비스 파인드 바이아이디 유저 1,userId2));
//        friendService.regist(new Friend(유저서비스 파인드 바이아이디 유저 2,userId1));

        friendProposalService.delete(tempFriendProposal);

        return "친구 추가 완료";
    }

    @DeleteMapping("proposal/{friendProposalId}")
    public String denyFriendProposal (@RequestParam("friendProposalId") int friendProposalId) {

        FriendProposal tempFriendProposal = friendProposalService.findById(friendProposalId);

        friendProposalService.delete(tempFriendProposal);

        return "친구 신청 거절 완료";
    }


    @DeleteMapping("/delete")
    public void deleteFriend (@RequestBody DeleteFriendRequestDto request) {

//        양쪽에서 삭제해주어야 하므로 friend 연관 2개를 찾아야 함.

//        friendService.delete(friendService.findBy);

    }

}
