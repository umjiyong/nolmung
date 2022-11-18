package com.ssafy.nolmung.friend.service;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import com.ssafy.nolmung.friend.repository.FriendProposalRepository;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FriendProposalService {

    private final FriendProposalRepository friendProposalRepository;

    @Transactional
    public void regist (FriendProposal friendProposal){

        //이미 친구인지 체크,

        //to from 역치된 proposal 있던지,

        //차단되었음,

        friendProposalRepository.regist(friendProposal);

    }

    public FriendProposal findById (int id) {

        return friendProposalRepository.findById(id);

    }

    public List<FriendProposal> findFriendListByToUserId (int toUserId) {

        return friendProposalRepository.findFriendProposalListByToUserId(toUserId);

    }

    @Transactional
    public void delete (FriendProposal friendProposal) {

        friendProposalRepository.delete(friendProposal);

    }


}
