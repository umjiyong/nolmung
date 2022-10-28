package com.ssafy.nolmung.user.repository;

import com.ssafy.nolmung.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.OneToMany;
import java.util.HashMap;

@Repository
@RequiredArgsConstructor
public abstract class UserRepositoryImpl implements UserRepository{

//    @Override
//    public HashMap findByUserIdForUser(String userId) {
//
//
//        return null;
//    }


}