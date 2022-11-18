package com.ssafy.nolmung.user.controller;

//import com.ssafy.nolmung.region.domain.Region;
//import com.ssafy.nolmung.region.service.RegionService;
import com.ssafy.nolmung.global.interceptor.IsLogined;
import com.ssafy.nolmung.global.interceptor.IsLoginedCheck;
import com.ssafy.nolmung.rank.service.RankService;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.dto.MessageResponseDto;
import com.ssafy.nolmung.user.dto.ResultDto;
import com.ssafy.nolmung.user.dto.request.UserRequestDto;
import com.ssafy.nolmung.user.dto.request.UserTokenRequestDto;
import com.ssafy.nolmung.user.dto.response.UserResponseDto;
import com.ssafy.nolmung.user.dto.response.UserTokenDataResponseDto;
import com.ssafy.nolmung.user.service.JwtService;
import com.ssafy.nolmung.user.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userservice;

    private final JwtService jwtService;

    private static final String SALT = "asdasdfqe422623456231ffgfdgdfgfgdgdgdgdgfgWRDFSFQEFdwdwdsadas";

//    private final RegionService regionService;

//    @GetMapping("/findAll")
//    public List<Tuple> readAllUser(){
//
//        List<Tuple> userList = userservice.findAllUser();
//        return userList;
//    }

    @PostMapping("/kakaoLogin")
    @IsLogined(role = IsLoginedCheck.NOTLOGIN)
    @ApiOperation(value="카카오 로그인 이벤트", notes="신규 가입자는 0번째에 new, 기존 가입자는 1번째에 old로 표기, 1번째 인덱스에 string으로 유저ID")
    public Map CheckIsNewUser(@RequestBody UserTokenRequestDto token) {

        System.out.println(token.getAccessToken());

        /**
         * 0번째는 유저아이디, 1번째는 신규가입인지, 아닌지 판별. 0이면 신규가입, 1이면 기존유저
         */
        UserTokenDataResponseDto userTokenDataResponseDto = userservice.getKakaoUser(token);
        List<String> list = new ArrayList<>();

        //아이디 넣기
        list.add(Integer.toString(userTokenDataResponseDto.getUserId()));

        //신규인지 기존인지 넣기
        if(userTokenDataResponseDto.getIsNewUser() == Integer.valueOf(0)){
            list.add("new");
        }
        else {
            list.add("old");
        }

        //카카오 uuid를 암호화 데이터로 지정해서 jwt 토큰으로 사용

        Map map = new HashMap<>();

        String jwtService1 = jwtService.create("KakaoUuid", userTokenDataResponseDto.getUserKakaoUuid(), "Bearer");

        map.put("Bearer", jwtService1);


        map.put("user", list);
        return map;
    }

    @GetMapping("/findByUuid/{KakaoUuid}")
    public UserResponseDto SearchByKakaoUuid(@PathVariable ("KakaoUuid") String uuid){
        User user = userservice.findByKakaoUuid(uuid);

        return new UserResponseDto(user);
    }


    @GetMapping("/findAll")
    @IsLogined(role = IsLoginedCheck.NOTLOGIN)
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

    @GetMapping("/test/{test}")
    public ResultDto test(@PathVariable ("test") int test){
        System.out.println("통신 성공!");
        return new ResultDto(test*10);
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
//    public HashMap<String, String> KakaoLogin(@PathVariable ("accessCode") String code) {
//        List<String> list = userservice.getKakaoAccessToken(code);
//        String access_token = list.get(0);
//        String refresh_token = list.get(1);
//        int userId = userservice.getKakaoUser(access_token);
//
//        System.out.println("컨트롤러에서 확인"+access_token+" , "+refresh_token);
//
//        HashMap<String, String> hashMap = new HashMap<>();
//        hashMap.put("accessToken", access_token);
//        hashMap.put("refreshToken", refresh_token);
//
//        if(userId == -1) hashMap.put("userId", "Error");
//        else hashMap.put("userId", Integer.toString(userId));
//
//        return hashMap;
//    }

    @ResponseBody
    @PutMapping("/regist/{userId}")
    @ApiOperation(value = "회원정보 입력/수정 시", notes="")
    public MessageResponseDto login(@PathVariable ("userId") int userId, @RequestBody UserRequestDto request){

        log.info("유저정보 수정 : {}", request);
        User user = userservice.findById(userId);
        System.out.println("유저 아이디"+userId);

        if(user==null){
            return new MessageResponseDto("심각한 로그인 오류");
        }


        if(request.getUserIntroduction() != null && !request.getUserIntroduction().equals("")) {
            user.setUserIntroduction(request.getUserIntroduction());
        }
//        user.setRegion(regionService.getRegionById(request.getRegionId()));

        if(request.getUserNickName() != null && !request.getUserNickName().equals("")) {
            user.setUserNickname(request.getUserNickName());
        }
        if(request.getUserImg() != null && !request.getUserImg().equals("")) {
            user.setUserImg(request.getUserImg());
        }
        if(request.getUserAddressText() != null && !request.getUserAddressText().equals("")) {
            user.setUserAddressText(request.getUserAddressText());
        }

        userservice.userRegist(user);

        return new MessageResponseDto("회원정보 입력 완료");
    }

    @DeleteMapping("/userDelete/{userId}")
    @ApiOperation(value = "유저 삭제", notes="본인 데이터만 삭제 가능")
    public ResultDto deleteUser(@PathVariable ("userId") int userId){
        String userUuid = jwtService.getUserId();

        User user = userservice.findByKakaoUuid(userUuid);

//        User user1 = userservice.findById(userId);


        return new ResultDto(userservice.deleteUser(userId));

    }

//    @ResponseBody
//    @DeleteMapping("/delete/{userId}")
//    @ApiOperation(value = "회원정보 삭제")
//    public ResponseEntity deleteUser()
}
