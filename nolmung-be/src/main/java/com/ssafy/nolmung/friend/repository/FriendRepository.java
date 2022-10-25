//package com.ssafy.nolmung.friend.repository;
//
//import com.ssafy.nolmung.friend.domain.Friend;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//
//import javax.persistence.EntityManager;
//
//@Repository
//@RequiredArgsConstructor
//
//public class FriendRepository {
//
//    private final EntityManager em;
//
//    public void regist (Friend friend) {
//
//        em.persist(friend);
//
//    }
//
//    public Friend findById (int id) {
//
//       return em.find(Friend.class,id);
//
//    }
//
//    public void delete (Friend friend) {
//
//        em.remove(friend);
//
//    }
//
//
//}
