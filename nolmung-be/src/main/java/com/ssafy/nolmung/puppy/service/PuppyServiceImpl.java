package com.ssafy.nolmung.puppy.service;

import com.ssafy.nolmung.puppy.domain.Breed;
import com.ssafy.nolmung.puppy.domain.Puppy;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoRequestDto;
import com.ssafy.nolmung.puppy.dto.request.PuppyInfoUpdateRequestDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyInfoResponseDto;
import com.ssafy.nolmung.puppy.dto.response.PuppyListResponseDto;
import com.ssafy.nolmung.puppy.repository.BreedRepository;
import com.ssafy.nolmung.puppy.repository.PuppyRepository;
import com.ssafy.nolmung.sharePuppy.domain.SharePuppy;
import com.ssafy.nolmung.sharePuppy.repository.SharePuppyRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Slf4j
@Service
@Transactional
public class PuppyServiceImpl implements PuppyService{

    private final UserRepository userRepository;

    private final BreedRepository breedRepository;

    private final PuppyRepository puppyRepository;

    private final SharePuppyRepository sharePuppyRepository;

    public PuppyServiceImpl(UserRepository userRepository, BreedRepository breedRepository, PuppyRepository puppyRepository, SharePuppyRepository sharePuppyRepository) {
        this.userRepository = userRepository;
        this.breedRepository = breedRepository;
        this.puppyRepository = puppyRepository;
        this.sharePuppyRepository = sharePuppyRepository;
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

        // 새로운 강아지 정보를 입력받아서 puppy 생성
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

        // 입력받은 user와 puppy를 sharePuppy로 연결
        SharePuppy connectUserAndPuppy = SharePuppy.builder()
                .sharePuppyCreateDate(LocalDateTime.now())
                .puppy(puppy)
                .user(user)
                .build();

        sharePuppyRepository.save(connectUserAndPuppy);
        puppyRepository.save(puppy);
    }

    @Override
    public PuppyInfoResponseDto getPuppyInfo(int puppyId) {
        Puppy puppy = puppyRepository.findById(puppyId).get();
        List<SharePuppy> sharePuppyList = sharePuppyRepository.findAllByPuppyPuppyId(puppyId);
        List<String> userImgList = new ArrayList<>();
        int breedId = puppy.getBreed().getBreedId();
        int age = getPuppyAge(puppy.getPuppyBirth());

        for (int i = 0; i < sharePuppyList.size(); i++){
            userImgList.add(sharePuppyList.get(i).getUser().getUserImg());
        }

        PuppyInfoResponseDto puppyInfo = PuppyInfoResponseDto.builder()
                .puppyId(puppy.getPuppyId())
                .puppyCode(puppy.getPuppyCode())
                .puppyName(puppy.getPuppyName())
                .puppyBirth(puppy.getPuppyBirth())
                .puppyBirthYear(puppy.getPuppyBirth().getYear())
                .puppyBirthMonth(puppy.getPuppyBirth().getMonthValue())
                .puppyBirthDay(puppy.getPuppyBirth().getDayOfMonth())
                .puppyWeight(puppy.getPuppyWeight())
                .puppySex(puppy.getPuppySex())
                .puppyIsNeutered(puppy.isPuppyIsNeutered())
                .puppyImg(puppy.getPuppyImg())
                .breedId(breedId)
                .puppyCharacter(puppy.getPuppyCharacter())
                .breedName(puppy.getBreed().getBreedName())
                .needWalkTime(puppy.getBreed().getNeedsWalkTimes())
                .puppyAge(age)
                .shareUserImageList(userImgList)
                .build();

        return puppyInfo;
    }

    @Override
    public List<HashMap<String, Object>> getMyPuppyList(int userId) {
        List<SharePuppy> sharePuppyList = sharePuppyRepository.findAllByUserUserId(userId);
        List<HashMap<String, Object>> myPuppyList = new ArrayList<>();

        for(int i = 0; i < sharePuppyList.size(); i++){
            HashMap<String, Object> myPuppy = new HashMap<>();
            Puppy puppy = sharePuppyList.get(i).getPuppy();

            myPuppy.put("puppyId", puppy.getPuppyId());
            myPuppy.put("puppyInfo", getPuppyInfo(puppy.getPuppyId()));
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
    public void shareAndRegisterMyPuppy(int puppyId, int userId) {
        Puppy myPuppy = puppyRepository.findById(puppyId).get();
        User user = userRepository.findById(userId).get();
        SharePuppy sharePuppy = SharePuppy.builder()
                .user(user)
                .puppy(myPuppy)
                .sharePuppyCreateDate(LocalDateTime.now())
                .build();

        sharePuppyRepository.save(sharePuppy);
    }

    @Transactional
    @Override
    public void updatePuppyInfo(PuppyInfoUpdateRequestDto puppyInfoUpdateRequestDto) {
        Puppy targetPuppy = puppyRepository.findById(puppyInfoUpdateRequestDto.getPuppyId()).get();
        Breed newBreed = breedRepository.findById(puppyInfoUpdateRequestDto.getBreedId()).get();

        targetPuppy.changePuppyInfo(puppyInfoUpdateRequestDto, newBreed);
        puppyRepository.save(targetPuppy);

    }

    @Override
    public void deletePuppyInfo(int puppyId, int userId) {
        int sharePeopleCount = sharePuppyRepository.countByPuppyPuppyId(puppyId);
        Puppy targetPuppy = puppyRepository.findById(puppyId).get();
        SharePuppy removeShareConnect = sharePuppyRepository.findByPuppyPuppyIdAndUserUserId(puppyId, userId);

        // 강아지와 연결된 user가 1명이고, userId가 같은 경우에는 share 테이블과 puppy 테이블에서 모두 삭제
        if(sharePeopleCount == 1){
            if(removeShareConnect != null){
                puppyRepository.delete(targetPuppy);
            }
        }

        // 그렇지 않고, 연결된 user가 여럿인 경우에는 해당 user와 puppy와의 share 관계만 해제시킴
        sharePuppyRepository.delete(removeShareConnect);
    }

    // 강아지 생년월일을 통해 만나이를 구하는 메서드
    @Override
    public int getPuppyAge(LocalDate birthDate) {
        int age;
        Calendar current = Calendar.getInstance();

        int currentYear  = current.get(Calendar.YEAR);
        int currentMonth = current.get(Calendar.MONTH) + 1;
        int currentDay   = current.get(Calendar.DAY_OF_MONTH);
        int birthMonth = birthDate.getMonthValue();
        int birthDay = birthDate.getDayOfMonth();

        age = currentYear - birthDate.getYear();

        if(birthMonth * 100 + birthDay > currentMonth * 100 + currentDay) age--;

        return age;
    }

    // 강아지 랜덤 코드를 생성하는 함수
    public String makePuppyCode(){
        String code = "";
        int countSameCode = 0;

        int leftLimit = 48;
        int rightLimit = 122;
        int length = 10;

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
