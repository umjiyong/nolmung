import React from 'react';
import {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../api/User';
import {getUserPuppyInfo} from '../api/Puppy';
import {user_friend_post} from '../api/Friend';

import {registAlarm} from '../api/Alarm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FriendRecommand = Props => {
  const navigation = useNavigation();
  const [userinfo, setuseinfo] = useState([]);
  const [puppyinfo, setpuppyinfo] = useState([]);
  const HumanName = userinfo.userNickName;
  const [DogInfo, setDogInfo] = useState('강아지가 없습니다');

  const user_info_func = async Id => {
    try {
      await getUserInfo(
        {id: Id},
        response => {
          setuseinfo(response.data);
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

  const user_puppy_info_func = async Id => {
    try {
      await getUserPuppyInfo(
        {id: Id}, //Id 로 바꿔줘야함
        response => {
          console.log('아이디임', Id);
          setpuppyinfo(response.data);
        },
        err => {
          console.log('강아지정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_friend_post_func = async () => {
    try {
      await user_friend_post(
        {fromUserId: 2, toUserId: 1},
        response => {
          console.log('보내기 성공');
        },
        err => {
          console.log('아티클질문 에러', err);
          setfriendId(null);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };
  console.log('Props', Props.userId);
  useEffect(() => {
    user_info_func(Props.userId);
    user_puppy_info_func(Props.userId);
  }, []);

  useEffect(() => {
    if (puppyinfo.length > 0) {
      setDogInfo(
        puppyinfo.myPuppyList[0].puppyInfo.puppyName
          .concat(' ', puppyinfo.myPuppyList[0].puppyInfo.puppyAge)
          .concat('', '살')
          .concat(' ', puppyinfo.myPuppyList[0].puppyInfo.breedName),
      );
    } else {
      setDogInfo('강아지가 없습니다');
    }
  }, [puppyinfo]);

  console.log(puppyinfo);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push('FriendProfile', {userId: Props.userId});
          }}>
          <View style={Styles.requestContainer}>
            <Image
              source={require('../assets/icons/Ellipse.png')}
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
              }}
            />
            <View style={Styles.requestTextBox}>
              <Text
                style={{...Styles.requestText, fontSize: 20, marginTop: -15}}>
                {HumanName}
              </Text>
              <Text style={{...Styles.requestText, fontSize: 16, marginTop: 3}}>
                {DogInfo}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => {
            user_friend_post_func();
            registAlarm({
              inAppAlarmContent:
                Props.myName + '님께서 친구 요청을 보냈습니다.',
              inAppAlarmLink: 'FriendScreen', // 알람 링크 추가 필요
              userId: Props.userId,
            });
          }}>
          <View style={{marginTop: -20, ...Styles.RequestBtn}}>
            <Text style={{color: '#FF772F'}}>친구 신청</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FriendRecommand;

const Styles = StyleSheet.create({
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  requestTextBox: {
    marginLeft: 10,
  },
  requestText: {
    color: '#282828',
  },
  RequestBtn: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderColor: '#FF772F',
    borderWidth: 1,
    borderRadius: 15,
  },
});
