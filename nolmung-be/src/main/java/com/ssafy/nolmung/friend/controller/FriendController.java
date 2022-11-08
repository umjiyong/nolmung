package com.ssafy.nolmung.friend.controller;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import com.ssafy.nolmung.friend.dto.request.BlockFriendRequestDto;
import com.ssafy.nolmung.friend.dto.request.DeleteFriendRequestDto;
import com.ssafy.nolmung.friend.dto.request.SendFriendProposalRequestDto;
import com.ssafy.nolmung.friend.dto.response.ReadBlockedUserResponseDto;
import com.ssafy.nolmung.friend.dto.response.ReadFriendProposalResponseDto;
import com.ssafy.nolmung.friend.dto.response.ReadFriendResponseDto;
import com.ssafy.nolmung.friend.service.BlockService;
import com.ssafy.nolmung.friend.service.FriendProposalService;
import com.ssafy.nolmung.friend.service.FriendService;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/friend")
@Slf4j
public class FriendController {

    private final UserService userService;
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

        //이미 친구인지 체크

        //to from 역치

        //차단되었음

        FriendProposal tempFriendProposal = FriendProposal.builder()
                               .toUserId(request.getToUserId())
                               .fromUserId(request.getFromUserId())
                               .build();

        friendProposalService.regist(tempFriendProposal);

        return "친구신청 완료";
    }

    @PostMapping("proposal/{friendProposalId}")
    public String acceptFriendProposal (@RequestParam("friendProposalId") int friendProposalId) {

        FriendProposal foundFriendProposal = friendProposalService.findById(friendProposalId);

        int userId1 = foundFriendProposal.getFromUserId();
        int userId2 = foundFriendProposal.getToUserId();

        friendService.regist(new Friend(userService.findById(userId1),userId2));
        friendService.regist(new Friend(userService.findById(userId2),userId1));

        friendProposalService.delete(foundFriendProposal);

        return "친구 추가 완료";
    }

    @DeleteMapping("proposal/{friendProposalId}")
    public String denyFriendProposal (@RequestParam("friendProposalId") int friendProposalId) {

        FriendProposal foundFriendProposal = friendProposalService.findById(friendProposalId);

        friendProposalService.delete(foundFriendProposal);

        return "친구 신청 거절 완료";
    }


    @DeleteMapping("/delete")
    public String deleteFriend (@RequestBody DeleteFriendRequestDto request) {

        int tempUserId = request.getUserId();
        int tempSubUserId = request.getSubUserId();

        friendService.delete(friendService.findFriendByDuoId(tempUserId,tempSubUserId));
        friendService.delete(friendService.findFriendByDuoId(tempSubUserId,tempUserId));

        return "친구 삭제 완료";
    }

    @PostMapping("/block")
    public String blockFriend (@RequestBody BlockFriendRequestDto request) {

        if (blockService.findBlockByDuoId(request.getUserId(), request.getBlockedUserId()) != null )
            return  "이미 차단되어 있습니다.";

        Block tempBlock = Block.builder()
                .user(userService.findById(request.getUserId()))
                .blockedUserId(request.getBlockedUserId())
                .build();

        blockService.regist(tempBlock);

        return "친구 차단 완료";
    }

    @DeleteMapping("block/{blockId}")
    public String cancelBlock (@RequestParam("blockId") int blockId) {

        Block foundBlock = blockService.findById(blockId);

        blockService.delete(foundBlock);

        return "친구 차단 해제 완료";
    }

    @GetMapping("/block/{userId}")
    public List<ReadBlockedUserResponseDto> readBlockedUserList (@RequestParam("userId") int userId) {

        List<Block> blockList = blockService.findBlockListByUserId(userId);
        List<ReadBlockedUserResponseDto> resultBlockList = new ArrayList<>();


        for (Block b : blockList) {
            resultBlockList.add(new ReadBlockedUserResponseDto(b));
        }

        return resultBlockList;
    }

    @GetMapping("/search/{userCode}")
    public User readUserByUserCode (@RequestParam("userCode") int userCode) {

       return friendService.findByUserCode(userCode);
    }

}
