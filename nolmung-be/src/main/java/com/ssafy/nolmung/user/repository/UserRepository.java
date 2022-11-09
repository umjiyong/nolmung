package com.ssafy.nolmung.user.repository;

import com.querydsl.core.Tuple;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.dto.response.UserResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserKakaoUuid(String uuid);

    User findByUserCode(int userCode);

//    List<Tuple> findAllUser();

//    HashMap findByUserIdForUser(String userId);
}
