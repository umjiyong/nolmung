package com.ssafy.nolmung.friend.service;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.dto.response.RecommendFriendResponseDto;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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

    public List<RecommendFriendResponseDto> recommendFriend(int userId) {
        List<RecommendFriendResponseDto> resultRecommendList = new ArrayList<>();
        List<Integer> recommendList = new ArrayList<>();
        List<Friend> friendList = friendRepository.findFriendListByUserId(userId);
        List<Integer> friendIdList = new ArrayList<>();

        for (Friend f : friendList) {
            friendIdList.add(f.getSubUserId());
        }

        Random r = new Random();

        while (recommendList.size()<3) {
          int temp = r.nextInt(userRepository.findAll().size()-1);

          int tempId = userRepository.findAll().get(temp).getUserId();

          if (tempId == userId || recommendList.contains(tempId) || friendIdList.contains(tempId)) continue;

          recommendList.add(tempId);
        }

        for (int i : recommendList) {
            resultRecommendList.add(new RecommendFriendResponseDto(i));
        }
        return resultRecommendList;
    }
}
