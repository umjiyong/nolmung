package com.ssafy.nolmung.friend.service;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.domain.FriendProposal;
import com.ssafy.nolmung.friend.repository.BlockRepository;
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
    private final FriendRepository friendRepository;
    private final BlockRepository blockRepository;

    @Transactional
    public void regist (FriendProposal friendProposal){

        int tempFrom = friendProposal.getFromUserId();
        int tempTo = friendProposal.getToUserId();

        //이미 친구인지 체크,
        if (friendRepository.findFriendByDuoId(tempFrom,tempTo) != null)
            return;

        //to from 역치된 proposal 있던지,
        if (friendProposalRepository.findFriendProposalByDuoId(tempFrom,tempTo) != null || friendProposalRepository.findFriendProposalByDuoId(tempTo,tempFrom) != null)
            return;

        //차단되었음,
        if (blockRepository.findBlockByDuoId(tempTo,tempFrom) != null)
            return;

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
