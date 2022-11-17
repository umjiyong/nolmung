package com.ssafy.nolmung.friend.service;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FriendService {

    private final FriendRepository friendRepository;
    private final UserRepository userRepository;

    @Transactional
    public void regist (Friend friend){

        friendRepository.regist(friend);

    }
    public Friend findById (int id) {

        return friendRepository.findById(id);

    }

    public List<Friend> findFriendListByUserId (int userId) {

        return friendRepository.findFriendListByUserId(userId);

    }

    public Friend findFriendByDuoId(int userId, int subUserId) {

        return friendRepository.findFriendByDuoId(userId,subUserId);

    }




    @Transactional
    public void delete (Friend friend) {

        friendRepository.delete(friend);

    }

    public User findByUserCode(String userCode) {

        return userRepository.findByUserCode(userCode);

    }
}
