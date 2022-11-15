package com.ssafy.nolmung.global.config;

import com.ssafy.nolmung.global.interceptor.ValidationInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;

@Configuration
@RequiredArgsConstructor
public class Webconfig implements WebMvcConfigurer {


    private final ValidationInterceptor validationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(validationInterceptor)
                .excludePathPatterns("/swagger-resources/**")
                .excludePathPatterns("/swagger-ui.html")
                .excludePathPatterns("/v2/api-docs")
                .excludePathPatterns("/webjars/**")
//                .excludePathPatterns("/**")
        ;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true)
                .maxAge(3000);

    }
}
