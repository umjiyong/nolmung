package com.ssafy.nolmung.user.repository;

import com.ssafy.nolmung.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
