package com.ssafy.nolmung.user.controller;

//import com.ssafy.nolmung.region.domain.Region;
//import com.ssafy.nolmung.region.service.RegionService;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.dto.MessageResponseDto;
import com.ssafy.nolmung.user.dto.ResultDto;
import com.ssafy.nolmung.user.dto.request.UserRequestDto;
import com.ssafy.nolmung.user.dto.response.UserResponseDto;
import com.ssafy.nolmung.user.repository.UserRepository;
import com.ssafy.nolmung.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userservice;
//    private final RegionService regionService;


    @GetMapping("/{userId}")
    public UserResponseDto readByUserId(@PathVariable ("userId") int userId){

        User user = userservice.findById(userId);

        return new UserResponseDto(user);
    }

    @ResponseBody
    @GetMapping("/kakao")
    @ApiOperation(value="카카오 로그인 요청 시", notes="kakaoAccessCode를 파라미터로 받아, 사용자의 accessToken, refreshToken을 반환")
    public void KakaoLogin(@RequestParam String code){

        System.out.println("Kakao AccessCode : " + code);
        String access_token = userservice.getKakaoAccessToken(code);
        userservice.createKakaoUser(access_token);

    }

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
        user.setUserLat(request.getUserLat());
        user.setUserLot(request.getUserLot());
        user.setUserAddressText(request.getUserAddressText());

        userservice.userRegist(user);

        return new MessageResponseDto("회원정보 입력 완료");
    }
}
