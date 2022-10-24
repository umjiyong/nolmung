package com.ssafy.nolmung.user.controller;

import com.ssafy.nolmung.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kakao")
@RequiredArgsConstructor
public class UserController {

    private final UserService userservice;

    @ResponseBody
    @GetMapping("/code")
    public void KakaoAccessCode(@RequestParam String code){
        System.out.println("Kakao AccessCode : " + code);
        String access_token = userservice.getKakaoAccessToken(code);
        userservice.createKakaoUser(access_token);
        System.out.println();
    }
}
