import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import MedalRanking from './MedalRanking';
import MyRanking from './MyRanking';
import axios from 'axios';
import {user_info} from '../api/User';
import {
  getAllRanking_daily,
  getAllRanking_weekly,
  getAllRanking_monthly,
  getMyRanking,
  reset_ranking,
} from '../api/Ranking';
// import schedule from 'node-schedule'

function AllRanking() {
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [mydailyRank, setmydailyRank] = useState([]);
  const [myweeklyRank, setmyweeklyRank] = useState([]);
  const [mymonthlyRank, setmymonthlyRank] = useState([]);

  const getDailyRanking = async () => {
    try {
      await getAllRanking_daily(
        {type: 'daily'},
        response => {
          setDailyData(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const getWeekRanking = async () => {
    try {
      await getAllRanking_weekly(
        {type: 'weekly'},
        response => {
          setWeeklyData(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const getMonthRanking = async () => {
    try {
      console.log('asdas');
      await getAllRanking_monthly(
        {type: 'monthly'},
        response => {
          setMonthlyData(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const getMyRanking_daily_func = async () => {
    try {
      console.log('asdas');
      await getMyRanking(
        {type: 'daily', userId: 1},
        response => {
          setmydailyRank(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const getMyRanking_weekly_func = async () => {
    try {
      await getMyRanking(
        {type: 'weekly', userId: 1},
        response => {
          setmyweeklyRank(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const getMyRanking_monthly_func = async () => {
    try {
      await getMyRanking(
        {type: 'monthly', userId: 1},
        response => {
          setmymonthlyRank(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const reset_daily_func = async () => {
    try {
      await reset_ranking(
        {catagory: 'daily'},
        response => {
          console.log(response);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const reset_weekly_func = async () => {
    try {
      await reset_ranking(
        {catagory: 'weekly'},
        response => {
          console.log(response);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const reset_monthly_func = async () => {
    try {
      await reset_ranking(
        {catagory: 'monthly'},
        response => {
          setmymonthlyRank(response.data);
        },
        err => {
          console.log('유저랭킹정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const [userInfo, setUserInfo] = useState([]);
  const user_info_func = async () => {
    try {
      await user_info(
        {userId: 1},
        response => {
          setUserInfo(response.data);
        },
        err => {
          console.log('유저정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };
  // var schedule = require("node-schedule")
  // schedule.scheduleJob('0 0 9 * * 1', function () {
  //   console.log("타이머 동작중")

  // })

  useEffect(() => {
    getDailyRanking();
    getWeekRanking();
    getMonthRanking();
    getMyRanking_daily_func();
    getMyRanking_weekly_func();
    getMyRanking_monthly_func();
    user_info_func();
  }, []);

  console.log('데이터확인', userinfo);
  //   console.log(weeklyData);
  //   console.log(monthlyData);

  const [select, setSelect] = useState('daily');
  const selectDate = () => {
    setSelect('daily');
    console.log(select);
  };

  const selectWeek = () => {
    setSelect('weekly');
    console.log(select);
  };

  const selectMonth = () => {
    setSelect('monthly');
    console.log(select);
  };
  const mung = 2000;
  const rank = 148;
  const highRank = 30;

  console.log('내 랭킹', mydailyRank);

  return (
    <>
      {/* style={select =='All' ? Styles.bottomBorder : Styles.selectTextHuman} */}
      <View style={Styles.Container}>
        <View style={Styles.selectBtn}>
          <Pressable onPress={selectDate}>
            <Text
              style={
                select === 'daily' ? Styles.SelectText : Styles.NoSelectText
              }>
              일간
            </Text>
          </Pressable>
          <Pressable onPress={selectWeek}>
            <Text
              style={
                select === 'weekly' ? Styles.SelectText : Styles.NoSelectText
              }>
              주간
            </Text>
          </Pressable>
          <Pressable onPress={selectMonth}>
            <Text
              style={
                select === 'monthly' ? Styles.SelectText : Styles.NoSelectText
              }>
              월간
            </Text>
          </Pressable>
        </View>
        {/* daily일때 */}
        {select === 'daily' ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.MainRankingContainer}>
                <Image
                  source={{uri: userinfo.userImg}}
                  resizeMode="cover"
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
                <Text
                  style={{
                    color: '#282828',
                    marginTop: 10,
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  {userinfo.userNickName}
                  {mydailyRank.rankScore} 멍
                </Text>
                <Text
                  style={{
                    color: '#282828',
                    marginTop: -10,
                    fontSize: 20,
                    fontFamily: 'NotoSansKR-Bold',
                  }}>
                  {' '}
                  {rank}위
                </Text>
                <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                  가장 높았던 순위
                </Text>
                <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                  {highRank}위
                </Text>
              </View>
              <View style={Styles.totalRankingContainer}>
                <Text
                  style={{color: '#282828', fontSize: 18, marginBottom: 10}}>
                  종합 랭킹
                </Text>
                <View style={{marginBottom: 150}}>
                  {dailyData.length > 0 ? (
                    <>
                      <MedalRanking
                        firstName={dailyData[0].userNickname}
                        mung={dailyData[0].rankScore}
                        img={require('../assets/icons/medal.png')}
                        color="gold"
                      />
                      <MedalRanking
                        firstName={dailyData[1].userNickname}
                        mung={dailyData[1].rankScore}
                        img={require('../assets/icons/medal.png')}
                        color="silver"
                      />
                      <MedalRanking
                        firstName={dailyData[2].userNickname}
                        mung={dailyData[2].rankScore}
                        img={require('../assets/icons/medal.png')}
                        color="brown"
                      />
                      <MyRanking
                        firstName={mydailyRank.userNickname}
                        mung={mydailyRank.rankScore}
                      />
                    </>
                  ) : null}
                </View>
              </View>
            </ScrollView>
          </>
        ) : null}
        {/* weekly일때 */}
        {select === 'weekly' ? (
          <>
            <View style={Styles.MainRankingContainer}>
              <Image
                source={{uri: userinfo.userImg}}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: '#282828',
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                {userinfo.userNickName}
                {mydailyRank.rankScore} 멍
              </Text>
              <Text
                style={{
                  color: '#282828',
                  marginTop: -10,
                  fontSize: 20,
                  fontFamily: 'NotoSansKR-Bold',
                }}>
                {' '}
                {rank}위
              </Text>
              <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                가장 높았던 순위
              </Text>
              <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                {highRank}위
              </Text>
            </View>
            <View style={Styles.totalRankingContainer}>
              <Text style={{color: '#282828', fontSize: 18, marginBottom: 10}}>
                종합 랭킹
              </Text>
              <View>
                {/* 지금 위클리에 1명밖에없어서 에러남 */}
                {weeklyData.length > 0 ? (
                  <>
                    <MedalRanking
                      firstName={weeklyData[0].userNickname}
                      mung={dailyData[0].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="gold"
                    />
                    <MedalRanking
                      firstName={dailyData[1].userNickname}
                      mung={dailyData[1].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="silver"
                    />
                    <MedalRanking
                      firstName={dailyData[2].userNickname}
                      mung={dailyData[2].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="brown"
                    />
                    <MyRanking
                      firstName={myweeklyRank.userNickname}
                      mung={myweeklyRank.rankScore}
                    />
                  </>
                ) : null}
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        {/* monthly일때 */}
        {select === 'monthly' ? (
          <>
            <View style={Styles.MainRankingContainer}>
              <Image
                source={{uri: userinfo.userImg}}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: '#282828',
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                {userinfo.userNickName}
                {mydailyRank.rankScore} 멍
              </Text>
              <Text
                style={{
                  color: '#282828',
                  marginTop: -10,
                  fontSize: 20,
                  fontFamily: 'NotoSansKR-Bold',
                }}>
                {' '}
                {rank}위
              </Text>
              <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                가장 높았던 순위
              </Text>
              <Text style={{color: '#282828', fontSize: 16, marginBottom: 5}}>
                {highRank}위
              </Text>
            </View>
            <View style={Styles.totalRankingContainer}>
              <Text style={{color: '#282828', fontSize: 18, marginBottom: 10}}>
                종합 랭킹
              </Text>
              <View>
                {/* 지금 위클리에 1명밖에없어서 에러남 */}
                {monthlyData.length > 0 ? (
                  <>
                    <MedalRanking
                      firstName={dailyData[0].userId}
                      mung={dailyData[0].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="gold"
                    />
                    <MedalRanking
                      firstName={dailyData[1].userId}
                      mung={dailyData[1].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="silver"
                    />
                    <MedalRanking
                      firstName={dailyData[2].userId}
                      mung={dailyData[2].rankScore}
                      img={require('../assets/icons/medal.png')}
                      color="brown"
                    />
                    <MyRanking
                      firstName={mymonthlyRank.userNickname}
                      mung={mymonthlyRank.rankScore}
                    />
                  </>
                ) : null}
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
    </>
  );
}

export default AllRanking;

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
  },
  selectBtn: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  SelectText: {
    color: '#282828',
    fontWeight: '600',
    fontSize: 16,
  },
  NoSelectText: {
    color: '#959595',
    fontSize: 16,
  },
  MainRankingContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingTop: 25,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 2,
  },
  totalRankingContainer: {
    marginTop: 25,
  },
});
