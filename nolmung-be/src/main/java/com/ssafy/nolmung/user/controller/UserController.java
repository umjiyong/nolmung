package com.ssafy.nolmung.user.controller;

//import com.ssafy.nolmung.region.domain.Region;
//import com.ssafy.nolmung.region.service.RegionService;
import com.querydsl.core.Tuple;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.dto.MessageResponseDto;
import com.ssafy.nolmung.user.dto.ResultDto;
import com.ssafy.nolmung.user.dto.request.UserRequestDto;
import com.ssafy.nolmung.user.dto.response.UserResponseDto;
import com.ssafy.nolmung.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userservice;
//    private final RegionService regionService;

//    @GetMapping("/findAll")
//    public List<Tuple> readAllUser(){
//
//        List<Tuple> userList = userservice.findAllUser();
//        return userList;
//    }


    @GetMapping("/findByUuid/{KakaoUuid}")
    public UserResponseDto SearchByKakaoUuid(@PathVariable ("KakaoUuid") String uuid){
        User user = userservice.findByKakaoUuid(uuid);

        return new UserResponseDto(user);
    }


    @GetMapping("/findAll")
    @ApiOperation(value="(개발용)전체 사용자 조회", notes="전체 사용자 반환")
    public ResultDto readAllUser(){
        List<UserResponseDto> userList = new ArrayList<>();

        userList = userservice.findAllUser().stream().map(user -> new UserResponseDto(user)).collect(Collectors.toList());
        return new ResultDto(userList) {
        };
    }

    @GetMapping("/{userId}")
    public UserResponseDto readByUserId(@PathVariable ("userId") int userId){

        User user = userservice.findById(userId);

        return new UserResponseDto(user);
    }


    @ResponseBody
    @GetMapping("/kakao/{accessCode}")
    @ApiOperation(value="카카오 로그인 요청 시", notes="kakaoAccessCode를 파라미터로 받아, 사용자의 accessToken, refreshToken을 반환")
    public HashMap<String, String> KakaoLogin(@PathVariable ("accessCode") String code) {
        List<String> list = userservice.getKakaoAccessToken(code);
        String access_token = list.get(0);
        String refresh_token = list.get(1);
        int userId = userservice.createKakaoUser(access_token);

        System.out.println("컨트롤러에서 확인"+access_token+" , "+refresh_token);

        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("accessToken", access_token);
        hashMap.put("refreshToken", refresh_token);

        if(userId == -1) hashMap.put("userId", "Error");
        else hashMap.put("userId", Integer.toString(userId));

        return hashMap;
    }

//    @ResponseBody
//    @GetMapping("/kakao/{accessCode}")
//    @ApiOperation(value="카카오 로그인 요청 시", notes="kakaoAccessCode를 파라미터로 받아, 사용자의 accessToken, refreshToken을 반환")
//    public ResponseEntity<?> KakaoLogin(@PathVariable ("accessCode") String code) throws URISyntaxException{
////        URI redirectUri = new URI("http://localhost:3000/redirect");
//        HttpHeaders httpHeaders = new HttpHeaders();
////        httpHeaders.setLocation(redirectUri);
//
//        List<String> list = userservice.getKakaoAccessToken(code);
//        System.out.println("Kakao AccessCode : " + code);
//        String access_token = list.get(0);
//        String refresh_token = list.get(1);
//
//        Cookie cookie = new Cookie("RefreshToken", refresh_token);
//        cookie.setPath("/");
//        httpHeaders.add("cookie", cookie.toString());
//
//        userservice.createKakaoUser(access_token);
//
//        ResponseCookie responseCookie = ResponseCookie.from("refreshToken", refresh_token)
//                .httpOnly(true)
//                .maxAge(3600)
//                .build();
//
//        System.out.println("쿠키 찍어보기 : " + cookie.toString());
//        System.out.println("리스폰스쿠키 찍어보기 : " + responseCookie.toString());
//        System.out.println("헤더 찍어보기 : " + httpHeaders.toString());
//
//        HashMap<String, String> hashMap = new HashMap<>();
//        hashMap.put("accessToken", access_token);
//        hashMap.put("refreshToken", refresh_token);
//
//        return new ResponseEntity<>(access_token, httpHeaders, HttpStatus.SEE_OTHER);
//    }

    @ResponseBody
    @PutMapping("/regist/{userId}")
    @ApiOperation(value = "회원정보 입력/수정 시", notes="")
    public MessageResponseDto login(@PathVariable ("userId") int userId, @RequestBody UserRequestDto request){

        User user = userservice.findById(userId);
        System.out.println("유저 아이디"+userId);

        if(user==null){
            return new MessageResponseDto("심각한 로그인 오류");
        }

        user.setUserIntroduction(request.getUserIntroduction());
//        user.setRegion(regionService.getRegionById(request.getRegionId()));

        user.setUserNickname(request.getUserNickname());
        user.setUserImg(request.getUserImg());
        user.setUserAddressText(request.getUserAddressText());

        userservice.userRegist(user);

        return new MessageResponseDto("회원정보 입력 완료");
    }

//    @ResponseBody
//    @DeleteMapping("/delete/{userId}")
//    @ApiOperation(value = "회원정보 삭제")
//    public ResponseEntity deleteUser()
}
