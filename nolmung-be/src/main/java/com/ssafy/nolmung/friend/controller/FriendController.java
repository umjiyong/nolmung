package com.ssafy.nolmung.friend.controller;

import com.ssafy.nolmung.friend.service.BlockService;
import com.ssafy.nolmung.friend.service.FriendService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/friend")
@Slf4j
public class FriendController {

    private final FriendService friendService;
    private final BlockService blockService;

    @GetMapping("/{userId}")
    public void getFriendList (@RequestParam("userId") int userId){




    }


    @DeleteMapping("/{friendId}")
    public void deleteFriend (@RequestParam("friendId") int friendId) {

        friendService.delete(friendService.findById(friendId));

    }

}
