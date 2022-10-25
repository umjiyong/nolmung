package com.ssafy.nolmung.user.controller;

import com.ssafy.nolmung.region.domain.Region;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import com.ssafy.nolmung.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userservice;

    private final UserRepository userRepository;

    @ResponseBody
    @GetMapping("/kakao")
    public void KakaoLogin(@RequestParam String code){

        System.out.println("Kakao AccessCode : " + code);
        String access_token = userservice.getKakaoAccessToken(code);
        userservice.createKakaoUser(access_token);

        Region region = null;
        User user = new User(1, region, "1", 1, 1, null,null,0,null,null,null,null,null);

        userRepository.save(user);
    }
}
