//package com.ssafy.nolmung.friend.repository;
//
//import com.ssafy.nolmung.friend.domain.Block;
//import com.ssafy.nolmung.friend.domain.Friend;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Repository;
//
//import javax.persistence.EntityManager;
//
//@Repository
//@RequiredArgsConstructor
//
//public class BlockRepository {
//
//    private final EntityManager em;
//
//    public void regist (Block block) {
//
//        em.persist(block);
//
//    }
//
//    public Block findById (int id) {
//
//       return em.find(Block.class,id);
//
//    }
//
//    public void delete (Block block) {
//
//        em.remove(block);
//
//    }
//
//
//}
