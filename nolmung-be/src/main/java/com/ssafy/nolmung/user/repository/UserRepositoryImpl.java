package com.ssafy.nolmung.user.repository;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nolmung.user.domain.QUser;
import com.ssafy.nolmung.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public abstract class UserRepositoryImpl implements UserRepository{

    @Autowired
    private final JPAQueryFactory jpaQueryFactory;

    private final QUser u = QUser.user;

//    @Override
//    public List<Tuple> findAllUser() {
//
//        List<Tuple> list = jpaQueryFactory.select(u.userId,
//                u.region.regionId,
//                u.userIntroduction,
//                u.userAddressText,
//                u.userCode,
//                u.userUpdateDate,
//                u.userImg,
//                u.userNickname,
//                u.userEmail,
//                u.userKakaoUuid).from(u).fetch();
//
//        return list;
//    }

//    @Override
//    public HashMap findByUserIdForUser(String userId) {
//
//
//        return null;
//    }


}