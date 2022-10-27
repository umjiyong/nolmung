package com.ssafy.nolmung.user.repository;

import com.ssafy.nolmung.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserKakaoUuid(String uuid);
}
