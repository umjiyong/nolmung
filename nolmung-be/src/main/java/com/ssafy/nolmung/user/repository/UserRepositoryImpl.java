package com.ssafy.nolmung.user.repository;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.nolmung.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public abstract class UserRepositoryImpl implements UserRepository{

    private final EntityManager em;

    @Autowired
    private final JPAQueryFactory jpaQueryFactory;

    public String deleteByUserId(int userId){
        em.createQuery("Delete From User u where u.userId = user_idx", User.class)
                .setParameter("user_idx",userId);

        return "Loc : UserRepository 유저정보 삭제";
    }

//    private final QUser u = QUser.user;

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