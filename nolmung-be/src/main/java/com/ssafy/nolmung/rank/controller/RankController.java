package com.ssafy.nolmung.rank.controller;

import com.ssafy.nolmung.rank.domain.*;
import com.ssafy.nolmung.rank.dto.response.ReadRankResponseDto;
import com.ssafy.nolmung.rank.service.RankService;
import com.ssafy.nolmung.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Slf4j
@RestController
@RequestMapping("/rank")
@RequiredArgsConstructor
public class RankController {

    private final RankService rankService;

    private final UserService userService;

    @GetMapping("/{category}/findAll")
    public ArrayList<ReadRankResponseDto> findRankAll (@PathVariable("category")RankCategory rankCategory){

        ArrayList<ReadRankResponseDto> rankList = new ArrayList<>();

        switch (rankCategory) {
            case daily: {
                for (DailyRank r : rankService.findDailyRankAll()) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }
            case weekly: {
                for (WeeklyRank r : rankService.findWeeklyRankAll()) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }
            case monthly: {
                for (MonthlyRank r : rankService.findMonthlyRankAll()) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }

            default: throw new RuntimeException("카테고리가 맞지 않습니다.");
        }

        Collections.sort(rankList);

        return rankList;
    }

    public ReadRankResponseDto makeReadRankResponseDto (Rank rank) {
        ReadRankResponseDto readRankResponseDto = new ReadRankResponseDto(rank);
        readRankResponseDto.setUserNickname(userService.findById(rank.getUserId()).getUserNickname());

        return readRankResponseDto;
    }

    @PostMapping("/regist/{category}/{userId}")
    public void registRank(@PathVariable("category")RankCategory rankCategory, @PathVariable("userId") int userId){

        switch (rankCategory) {
            case daily: rankService.registDailyRank(userId);
                        break;
            case weekly: rankService.registWeeklyRank(userId);
                        break;
            case monthly: rankService.registMonthlyRank(userId);
                       break;

            default: throw new RuntimeException("카테고리가 맞지 않습니다.");
        }


    }

    @GetMapping("/{category}/{userId}")
    public ReadRankResponseDto findRankById (@PathVariable("category")RankCategory rankCategory, @PathVariable("userId") int userId) {


        switch (rankCategory) {
            case daily: return makeReadRankResponseDto(rankService.findDailyRankById(userId));
            case weekly: return makeReadRankResponseDto(rankService.findWeeklyRankById(userId));
            case monthly: return makeReadRankResponseDto(rankService.findMonthlyRankById(userId));

            default: throw new RuntimeException("카테고리가 맞지 않습니다.");
        }

    }

    @PutMapping("/plus/{userId}/{rankScore}")
    public void plusRankScore(@PathVariable("userId") int userId, @PathVariable("rankScore")int rankScore) {
        rankService.plusRankScore(userId,rankScore);
    }

//    @DeleteMapping("/reset/{category}")
//    public void resetDailyRankScore (@PathVariable("category") RankCategory rankCategory) {
//
//        rankService.resetRankScore(rankCategory);
//    }

    @Scheduled (cron = "0 0 0 * * *")
    @DeleteMapping("/reset/{category}")
    public void resetDailyRankScore (@PathVariable("category") RankCategory rankCategory) {

        rankService.resetRankScore(RankCategory.daily);
    }

    @Scheduled (cron = "0 0 0 * MON ?")
    @DeleteMapping("/reset/{category}")
    public void resetWeeklyRankScore (@PathVariable("category") RankCategory rankCategory) {

        rankService.resetRankScore(RankCategory.weekly);
    }

    @Scheduled (cron = "0 0 0 1 * *")
    @DeleteMapping("/reset/{category}")
    public void resetMonthlyRankScore () {

        rankService.resetRankScore(RankCategory.monthly);
    }


    @GetMapping("/{category}/friend/{userId}")
    public PriorityQueue<ReadRankResponseDto> findFriendRank (@PathVariable("category")RankCategory rankCategory, @PathVariable("userId") int userId){

        PriorityQueue<ReadRankResponseDto> rankList = new PriorityQueue<>();

        switch (rankCategory) {
            case daily: {
                for (DailyRank r : rankService.findFriendDailyRank(userId)) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }
            case weekly: {
                for (WeeklyRank r : rankService.findFriendWeeklyRank(userId)) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }
            case monthly: {
                for (MonthlyRank r : rankService.findFriendMonthlyRank(userId)) {
                    rankList.add(makeReadRankResponseDto(r));
                }
                break;
            }

            default: throw new RuntimeException("카테고리가 맞지 않습니다.");
        }

        return rankList;
    }
}
