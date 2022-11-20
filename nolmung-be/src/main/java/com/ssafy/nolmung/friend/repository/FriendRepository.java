package com.ssafy.nolmung.friend.repository;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class FriendRepository {

    private final EntityManager em;

    public void regist (Friend friend) {

        em.persist(friend);

    }

    public Friend findById (int id) {

       return em.find(Friend.class,id);

    }

    public void delete (Friend friend) {

        em.remove(friend);

    }


    public List<Friend> findFriendListByUserId(int userId) {

        List<Friend> friendList =  em.createQuery("SELECT f FROM Friend f WHERE f.user.userId = :user_id",Friend.class)
                .setParameter("user_id",userId).getResultList();


        return friendList;
    }

    public Friend findFriendByDuoId(int userId, int subUserId) {

        Friend friend =  em.createQuery("SELECT f FROM Friend f WHERE f.user.userId = :user_id AND f.subUserId = :sub_user_id",Friend.class)
                .setParameter("user_id",userId).setParameter("sub_user_id",subUserId).getSingleResult();

        return friend;
    }
}
