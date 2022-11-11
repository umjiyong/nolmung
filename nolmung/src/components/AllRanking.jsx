import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import MedalRanking from "./MedalRanking";
import MyRanking from "./MyRanking";
import axios from "axios";
import { getAllRanking_daily,getAllRanking_weekly,getAllRanking_monthly } from "../api/ranking";

function AllRanking() {
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const getDailyRanking = async () => {
    try {
      await getAllRanking_daily(
        { type: "daily" },
        (response) => {
          setDailyData(response.data);
        },
        (err) => {
          console.log("유저랭킹정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };

  const getWeekRanking = async () => {
    try { 
      await getAllRanking_weekly(
        { type: "weekly" },
        (response) => {
          console.log("Asdasd",response.data)
          setWeeklyData(response.data);
        },
        (err) => {
          console.log("유저랭킹정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };

  const getMonthRanking = async () => {
    try {
      console.log("asdas");
      await getAllRanking_monthly(
        { type: "monthly" },
        (response) => {
          setMonthlyData(response.data);
        },
        (err) => {
          console.log("유저랭킹정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };

  useEffect(() => {
    getDailyRanking();
    getWeekRanking();
    getMonthRanking();
  }, []);

  console.log("데이터확인",weeklyData);
  //   console.log(weeklyData);
  //   console.log(monthlyData);

  const [select, setSelect] = useState("daily");
  const selectDate = () => {
    setSelect("daily");
    console.log(select);
  };

  const selectWeek = () => {
    setSelect("weekly");
    console.log(select);
  };

  const selectMonth = () => {
    setSelect("monthly");
    console.log(select);
  };
  const mung = 2000;
  const rank = 148;
  const highRank = 30;
  return (
    <>
      {/* style={select =='All' ? Styles.bottomBorder : Styles.selectTextHuman} */}
      <View style={Styles.Container}>
        <View style={Styles.selectBtn}>
          <Pressable onPress={selectDate}>
            <Text
              style={
                select === "daily" ? Styles.SelectText : Styles.NoSelectText
              }
            >
              일간
            </Text>
          </Pressable>
          <Pressable onPress={selectWeek}>
            <Text
              style={
                select === "weekly" ? Styles.SelectText : Styles.NoSelectText
              }
            >
              주간
            </Text>
          </Pressable>
          <Pressable onPress={selectMonth}>
            <Text
              style={
                select === "monthly" ? Styles.SelectText : Styles.NoSelectText
              }
            >
              월간
            </Text>
          </Pressable>
        </View>
        {/* daily일때 */}
        {select === "daily" ? (
          <>
            <View style={Styles.MainRankingContainer}>
              <Image
                source={require("../assets/icons/DogImg.png")}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: "#282828",
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {mung} 멍
              </Text>
              <Text
                style={{
                  color: "#282828",
                  marginTop: -10,
                  fontSize: 20,
                  fontFamily: "NotoSansKR-Bold",
                }}
              >
                {" "}
                {rank}위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                가장 높았던 순위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                {highRank}위
              </Text>
            </View>
            <View style={Styles.totalRankingContainer}>
              <Text
                style={{ color: "#282828", fontSize: 18, marginBottom: 10 }}
              >
                종합 랭킹
              </Text>
              <View>
                {dailyData.length > 0 ? (
                  <>
                    <MedalRanking
                      firstName={dailyData[0].userId}
                      mung={dailyData[0].rankScore}
                      img={require("../assets/icons/medal.png")}
                      color="gold"
                    />
                    <MedalRanking
                      firstName={dailyData[1].userId}
                      mung={dailyData[1].rankScore}
                      img={require("../assets/icons/medal.png")}
                      color="silver"
                    />
                    <MedalRanking
                      firstName={dailyData[2].userId}
                      mung={dailyData[2].rankScore}
                      img={require("../assets/icons/medal.png")}
                      color="brown"
                    />
                    <MyRanking
                      firstName="내 랭킹"
                      mung={dailyData[4].rankScore}
                      rank="148"
                    />
                  </>
                ) : null}
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        {/* weekly일때 */}
        {select === "weekly" ? (
          <>
            <View style={Styles.MainRankingContainer}>
              <Image
                source={require("../assets/icons/DogImg.png")}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: "#282828",
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {mung} 멍
              </Text>
              <Text
                style={{
                  color: "#282828",
                  marginTop: -10,
                  fontSize: 20,
                  fontFamily: "NotoSansKR-Bold",
                }}
              >
                {" "}
                {rank}위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                가장 높았던 순위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                {highRank}위
              </Text>
            </View>
            <View style={Styles.totalRankingContainer}>
              <Text
                style={{ color: "#282828", fontSize: 18, marginBottom: 10 }}
              >
                종합 랭킹
              </Text>
              <View>
                <MedalRanking
                  firstName="김동일"
                  mung="10324"
                  img={require("../assets/icons/medal.png")}
                  color="gold"
                />
                <MedalRanking
                  firstName="김동이"
                  mung="10314"
                  img={require("../assets/icons/medal.png")}
                  color="silver"
                />
                <MedalRanking
                  firstName="김동삼"
                  mung="10304"
                  img={require("../assets/icons/medal.png")}
                  color="brown"
                />
                <MyRanking firstName="내 랭킹" mung="8080" rank="148" />
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        {/* monthly일때 */}
        {select === "monthly" ? (
          <>
            <View style={Styles.MainRankingContainer}>
              <Image
                source={require("../assets/icons/DogImg.png")}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: "#282828",
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {mung} 멍
              </Text>
              <Text
                style={{
                  color: "#282828",
                  marginTop: -10,
                  fontSize: 20,
                  fontFamily: "NotoSansKR-Bold",
                }}
              >
                {" "}
                {rank}위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                가장 높았던 순위
              </Text>
              <Text style={{ color: "#282828", fontSize: 16, marginBottom: 5 }}>
                {highRank}위
              </Text>
            </View>
            <View style={Styles.totalRankingContainer}>
              <Text
                style={{ color: "#282828", fontSize: 18, marginBottom: 10 }}
              >
                종합 랭킹
              </Text>
              <View>
                <MedalRanking
                  firstName="박동일"
                  mung="10324"
                  img={require("../assets/icons/medal.png")}
                  color="gold"
                />
                <MedalRanking
                  firstName="박동이"
                  mung="10314"
                  img={require("../assets/icons/medal.png")}
                  color="silver"
                />
                <MedalRanking
                  firstName="박동삼"
                  mung="10304"
                  img={require("../assets/icons/medal.png")}
                  color="brown"
                />
                <MyRanking firstName="내 랭킹" mung="8080" rank="148" />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  SelectText: {
    color: "#282828",
    fontWeight: "600",
    fontSize: 16,
  },
  NoSelectText: {
    color: "#959595",
    fontSize: 16,
  },
  MainRankingContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingTop: 25,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 2,
  },
  totalRankingContainer: {
    marginTop: 25,
  },
});
