package com.ssafy.nolmung.friend.service;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.repository.BlockRepository;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BlockService {

    private final BlockRepository blockRepository;

    @Transactional
    public void regist (Block block){

        blockRepository.regist(block);

    }
    public Block findById (int id) {

        return blockRepository.findById(id);

    }


    @Transactional
    public void delete (Block block) {

        blockRepository.delete(block);

    }


}
