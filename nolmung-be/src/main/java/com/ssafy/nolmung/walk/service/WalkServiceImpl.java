package com.ssafy.nolmung.walk.service;

import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.repository.PuppyRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import com.ssafy.nolmung.walk.domain.Walk;
import com.ssafy.nolmung.walk.dto.request.WalkRecordRequestDto;
import com.ssafy.nolmung.walk.dto.response.WalkPuppyListResponseDto;
import com.ssafy.nolmung.walk.repository.WalkRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
public class WalkServiceImpl implements WalkService{

    private final PuppyRepository puppyRepository;
    private final WalkRepository walkRepository;
    private final UserRepository userRepository;

    public WalkServiceImpl(PuppyRepository puppyRepository, WalkRepository walkRepository, UserRepository userRepository) {
        this.puppyRepository = puppyRepository;
        this.walkRepository = walkRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<WalkPuppyListResponseDto> getWalkPuppyList(int userId, LocalDate walkDate) {
        List<Walk> walkRecordList = walkRepository.findAllByWalkDateAndUserUserId(walkDate, userId);
        List<Puppy> puppies = new ArrayList<>();
        List<WalkPuppyListResponseDto> puppyList = new ArrayList<>();

        for(int i = 0; i < walkRecordList.size(); i++){
             int puppyId = walkRecordList.get(i).getPuppy().getPuppyId();
             Puppy puppy = puppyRepository.findById(puppyId).get();

             if(!puppies.contains(puppy)) {
                 puppies.add(puppy);
             }
        }

        for(int i = 0; i < puppies.size(); i++){
            Puppy puppy = puppyRepository.findById(puppies.get(i).getPuppyId()).get();

            WalkPuppyListResponseDto newPuppy = WalkPuppyListResponseDto.builder()
                    .puppyId(puppy.getPuppyId())
                    .puppyName(puppy.getPuppyName())
                    .puppyImg(puppy.getPuppyImg())
                    .build();

            if(!puppyList.contains(newPuppy)){
                puppyList.add(newPuppy);
            }
        }



        return puppyList;
    }

    @Override
    @Transactional
    public void insertWalkRecord(WalkRecordRequestDto walkRecordRequestDto) {
        LocalDate date;

        for(int i = 0; i < walkRecordRequestDto.getPuppyIdList().size(); i++){
            Puppy puppy = puppyRepository.findById(walkRecordRequestDto.getPuppyIdList().get(i)).get();
            User user = userRepository.findById(walkRecordRequestDto.getUserId()).get();
            date = walkRecordRequestDto.getWalkStartTime().toLocalDate();

            Walk newRecord = Walk.builder()
                    .walkStartTime(walkRecordRequestDto.getWalkStartTime())
                    .walkDate(date)
                    .walkEndTime(walkRecordRequestDto.getWalkEndTime())
                    .walkDistance(walkRecordRequestDto.getWalkDistance())
                    .walkUserImg(walkRecordRequestDto.getWalkUserImg())
                    .user(user)
                    .puppy(puppy)
                    .build();

        }
    }

    @Override
    public double getWalkAttainment(int walkDistance) {

        return 0;
    }


}
