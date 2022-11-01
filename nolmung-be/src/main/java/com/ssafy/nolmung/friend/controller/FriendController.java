package com.ssafy.nolmung.friend.controller;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.dto.response.ReadFriendResponse;
import com.ssafy.nolmung.friend.dto.response.ReadFriendResponseDto;
import com.ssafy.nolmung.friend.service.BlockService;
import com.ssafy.nolmung.friend.service.FriendService;
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

    private final FriendService friendService;
    private final BlockService blockService;

    @GetMapping("/{userId}")
    public List<ReadFriendResponseDto> getFriendList (@RequestParam("userId") int userId){

        List<Friend> friendList = friendService.findFriendListByUserId(userId);
        List<ReadFriendResponseDto> result = new ArrayList<>();

        for (Friend f : friendList) {
            result.add(new ReadFriendResponseDto(f));
        }

        return result;
    }

    @PostMapping("/send")
    public


    @DeleteMapping("/{friendId}")
    public void deleteFriend (@RequestParam("friendId") int friendId) {

        friendService.delete(friendService.findById(friendId));

    }

}
