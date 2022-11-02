package com.ssafy.nolmung.friend.repository;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class BlockRepository {

    private final EntityManager em;

    public void regist (Block block) {

        em.persist(block);

    }

    public Block findById (int id) {

       return em.find(Block.class,id);

    }

    public void delete (Block block) {

        em.remove(block);

    }

    public List<Block> findBlockListByUserId(int userId) {

        List<Block> blockList =  em.createQuery("SELECT b FROM Block b WHERE b.user.userId = :user_id",Block.class)
                .setParameter("user_id",userId).getResultList();

        return blockList;
    }


}
