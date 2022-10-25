//package com.ssafy.nolmung.friend.controller;
//
//import com.ssafy.nolmung.friend.service.BlockService;
//import com.ssafy.nolmung.friend.service.FriendService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/api/friend")
//@Slf4j
//public class FriendController {
//
//    private final FriendService friendService;
//    private final BlockService blockService;
//
//
//    @DeleteMapping("/{friendId}")
//    public void deleteFriend (@RequestParam("friendId") int friendId) {
//
//        friendService.delete(friendService.findById(friendId));
//
//    }
//
//}
