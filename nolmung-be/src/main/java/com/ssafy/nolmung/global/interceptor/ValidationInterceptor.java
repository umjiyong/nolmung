package com.ssafy.nolmung.global.interceptor;

import com.ssafy.nolmung.user.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
@RequiredArgsConstructor
public class ValidationInterceptor implements HandlerInterceptor {

    private final JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{

        //spring interceptor CORS preflight 이슈
        if(request.getMethod().equals("OPTIONS")) {
            return true;
        }

//        /**
//         * rest api 요청이 아닐 경우 통과(우리의 판별 대상이 아님)
//         */
//        if(!(handler instanceof HandlerMethod)){
//            return true;
//        }
//

        String token = extractJwtTokenFromHeader(request);
        log.info("token ={}", token);
        /**
         * 판별 대상이 아닐경우 : controller의 method 에 @IsLogined 매핑이 없을 경우
         * 로그인 요청인 경우
         */
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        IsLogined isLogined = handlerMethod.getMethodAnnotation(IsLogined.class);
        if(isLogined == null || token.equals("NOTLOGIN")){
            return true;
        }

        /**
         * 유효한 요청일때 인터셉터 통과! 모든 요청에서 유효성을 검사하게 되어 리소스 낭비가 발생하긴 함.
         */
        if(jwtService.isValidUser()) {
            return true;
        }


        /**
         * 아니면 exception 발생
         */
        throw new Exception();
    }

    private String extractJwtTokenFromHeader(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        log.info("헤더 : {}", authorization);
        if (authorization == null) {
            throw new RuntimeException();
        }
        try {
            return authorization;
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }
}
