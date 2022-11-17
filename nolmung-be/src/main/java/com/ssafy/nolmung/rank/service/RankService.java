package com.ssafy.nolmung.rank.service;

import com.ssafy.nolmung.friend.domain.Friend;
import com.ssafy.nolmung.friend.repository.FriendRepository;
import com.ssafy.nolmung.rank.domain.*;
import com.ssafy.nolmung.rank.repository.DailyRankRepository;
import com.ssafy.nolmung.rank.repository.MonthlyRankRepository;
import com.ssafy.nolmung.rank.repository.WeeklyRankRepository;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RankService {

    private final DailyRankRepository dailyRankRepository;
    private final WeeklyRankRepository weeklyRankRepository;
    private final MonthlyRankRepository monthlyRankRepository;
    private final FriendRepository friendRepository;

    private final UserRepository userRepository;

    public List<DailyRank> findDailyRankAll() {

        List<DailyRank> RankList = new ArrayList<>();

        dailyRankRepository.findAll().forEach(e -> RankList.add(e));

        return RankList;
    }

    public List<WeeklyRank> findWeeklyRankAll() {

        List<WeeklyRank> RankList = new ArrayList<>();

        weeklyRankRepository.findAll().forEach(e -> RankList.add(e));

        return RankList;
    }

    public List<MonthlyRank> findMonthlyRankAll() {

        List<MonthlyRank> RankList = new ArrayList<>();

        monthlyRankRepository.findAll().forEach(e -> RankList.add(e));

        return RankList;
    }
    @Transactional
    public void registDailyRank (int userId) {

        DailyRank dailyRank = new DailyRank(userId);

        dailyRankRepository.save(dailyRank);
    }

    @Transactional
    public void registWeeklyRank (int userId) {

        WeeklyRank weeklyRank = new WeeklyRank(userId);

        weeklyRankRepository.save(weeklyRank);
    }

    @Transactional
    public void registMonthlyRank (int userId) {

        MonthlyRank monthlyRank = new MonthlyRank(userId);

        monthlyRankRepository.save(monthlyRank);
    }

    @Transactional
    public void plusRankScore (int userId, int rankScore){
        if (dailyRankRepository.existsById(userId)){
            DailyRank dailyTemp = dailyRankRepository.findById(userId).get();
            dailyTemp.setRankScore(dailyTemp.getRankScore() + rankScore);
            dailyRankRepository.save(dailyTemp);
        }

        if(weeklyRankRepository.existsById(userId)) {
            WeeklyRank weeklyTemp = weeklyRankRepository.findById(userId).get();
            weeklyTemp.setRankScore(weeklyTemp.getRankScore() + rankScore);
            weeklyRankRepository.save(weeklyTemp);
        }


        if(monthlyRankRepository.existsById(userId)) {
            MonthlyRank monthlyTemp = monthlyRankRepository.findById(userId).get();
            monthlyTemp.setRankScore(monthlyTemp.getRankScore() + rankScore);
            monthlyRankRepository.save(monthlyTemp);
        }
    }

    @Transactional
    public void resetRankScore (RankCategory rankCategory){

        List<User> userList = userRepository.findAll();

        switch (rankCategory) {
            case daily:
                dailyRankRepository.deleteAll();

                for (User u : userList) {
                    registDailyRank(u.getUserId());
                }

                break;
            case weekly:
                weeklyRankRepository.deleteAll();

                for (User u : userList) {
                    registWeeklyRank(u.getUserId());
                }

                break;

            case monthly: {
                monthlyRankRepository.deleteAll();

                for (User u : userList) {
                    registMonthlyRank(u.getUserId());
                }

                break;
            }

            default : return;
        }
    }



    public DailyRank findDailyRankById (int userId) {

        DailyRank temp = dailyRankRepository.findById(userId).get();

        return temp;
    }

    public WeeklyRank findWeeklyRankById (int userId) {

        WeeklyRank temp = weeklyRankRepository.findById(userId).get();

        return temp;
    }

    public MonthlyRank findMonthlyRankById (int userId) {

        MonthlyRank temp = monthlyRankRepository.findById(userId).get();

        return temp;
    }

    public List<DailyRank> findFriendDailyRank(int userId) {

        List<DailyRank> RankList = new ArrayList<>();

        List<Friend> friendList = friendRepository.findFriendListByUserId(userId);

        for(Friend f : friendList) {
            RankList.add(dailyRankRepository.findById(f.getSubUserId()).get());
        }

        return RankList;
    }

    public List<WeeklyRank> findFriendWeeklyRank(int userId) {

        List<WeeklyRank> RankList = new ArrayList<>();

        List<Friend> friendList = friendRepository.findFriendListByUserId(userId);

        for(Friend f : friendList) {
            RankList.add(weeklyRankRepository.findById(f.getSubUserId()).get());
        }

        return RankList;
    }

    public List<MonthlyRank> findFriendMonthlyRank(int userId) {

        List<MonthlyRank> RankList = new ArrayList<>();

        List<Friend> friendList = friendRepository.findFriendListByUserId(userId);

        for(Friend f : friendList) {
            RankList.add(monthlyRankRepository.findById(f.getSubUserId()).get());
        }

        return RankList;
    }


}
