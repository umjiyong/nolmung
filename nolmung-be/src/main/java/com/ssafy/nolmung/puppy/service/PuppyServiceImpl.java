package com.ssafy.nolmung.puppy.service;

import com.ssafy.nolmung.puppy.domain.Breed;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;
import com.ssafy.nolmung.puppy.repository.BreedRepository;
import com.ssafy.nolmung.puppy.repository.PuppyRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Slf4j
@Service
@Transactional
public class PuppyServiceImpl implements PuppyService{

    private final UserRepository userRepository;

    private final BreedRepository breedRepository;

    private final PuppyRepository puppyRepository;

    public PuppyServiceImpl(UserRepository userRepository, BreedRepository breedRepository, PuppyRepository puppyRepository) {
        this.userRepository = userRepository;
        this.breedRepository = breedRepository;
        this.puppyRepository = puppyRepository;
    }

    @Override
    public void insertPuppy(PuppyInfoRequestDto puppyInfoRequestDto) {
        User user = userRepository.findById(puppyInfoRequestDto.getUserId()).get();
        Breed breed = breedRepository.findById(puppyInfoRequestDto.getBreedId()).get();
        int puppyWalkNeeds;
        String puppyCode;

        // 시고르자브종인 경우, 권장 산책량 별도로 계산해서 삽입
        if(breed.getBreedId() == 1){
            puppyWalkNeeds = 100; // 추후에 계산 식으로 변경
        }
        else{
            puppyWalkNeeds = breed.getNeedsWalkTimes();
        }

        puppyCode = makePuppyCode();

        Puppy puppy = Puppy.builder()
                .puppyName(puppyInfoRequestDto.getPuppyName())
                .puppyBirth(puppyInfoRequestDto.getPuppyBirth())
                .puppyWeight(puppyInfoRequestDto.getPuppyWeight())
                .puppyCharacter(puppyInfoRequestDto.getPuppyCharacter())
                .puppySex(puppyInfoRequestDto.getPuppySex())
                .puppyIsNeutered(puppyInfoRequestDto.isPuppyIsNeutered())
                .puppyImg(puppyInfoRequestDto.getPuppyImg())
                .breed(breed)
                .puppyWalkNeeds(puppyWalkNeeds)
                .puppyUpdateDate(LocalDateTime.now())
                .puppyCode(puppyCode)

        .build();

        puppyRepository.save(puppy);
    }

    @Override
    public PuppyInfoResponseDto getPuppyInfo(int puppyId) {
        Puppy puppy = puppyRepository.findById(puppyId).get();
        int breedId = puppy.getBreed().getBreedId();

        PuppyInfoResponseDto puppyInfo = PuppyInfoResponseDto.builder()
                .puppyCode(puppy.getPuppyCode())
                .puppyName(puppy.getPuppyName())
                .puppyBirth(puppy.getPuppyBirth())
                .puppyWeight(puppy.getPuppyWeight())
                .puppySex(puppy.getPuppySex())
                .puppyIsNeutered(puppy.isPuppyIsNeutered())
                .puppyImg(puppy.getPuppyImg())
                .breedId(breedId)
                .build();

        return puppyInfo;
    }

    @Override
    public List<PuppyListResponseDto> getMyPuppyList(int userId) {
        List<Puppy> puppyList = puppyRepository.findAllByUserId(userId);
        List<PuppyListResponseDto> myPuppyList = new ArrayList<>();

        for(int i = 0; i < puppyList.size(); i++){
            Puppy puppy = puppyList.get(i);

            PuppyListResponseDto myPuppy = PuppyListResponseDto.builder()
                                                    .puppyId(puppy.getPuppyId())
                                                    .puppyName(puppy.getPuppyName())
                                                    .puppyImg(puppy.getPuppyImg())
                                                    .build();

            myPuppyList.add(myPuppy);
        }

        return myPuppyList;
    }

    @Override
    public PuppyListResponseDto searchPuppyByCode(String puppyCode) {
        Puppy puppy = puppyRepository.findByPuppyCode(puppyCode);

        PuppyListResponseDto myPuppy = PuppyListResponseDto.builder()
                .puppyId(puppy.getPuppyId())
                .puppyImg(puppy.getPuppyImg())
                .puppyName(puppy.getPuppyName())
                .build();

        return myPuppy;
    }

    @Override
    public void registerMyPuppy(int puppyId, int userId) {
        Puppy myPuppy = puppyRepository.findById(puppyId).get();
        User user = userRepository.findById(userId).get();

    }

    // 강아지 랜덤 코드를 생성하는 함수
    public String makePuppyCode(){
        String code = "";
        int countSameCode = 0;

        int leftLimit = 48;
        int rightLimit = 122;
        int length = 6;

        Random random = new Random();

        while (true){
            code = random.ints(leftLimit, rightLimit + 1)
                    .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                    .limit(length)
                    .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                    .toString();

            code = "#" + code.toUpperCase();
            countSameCode = puppyRepository.countByPuppyCode(code);

            if(countSameCode <= 1) break;
        }

        return code;
    }

}
