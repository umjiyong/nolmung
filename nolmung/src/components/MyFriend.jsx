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
const MyFriend = Props => {
  const navigation = useNavigation();
  const [userinfo, setuseinfo] = useState([]);
  const [puppyinfo, setpuppyinfo] = useState([]);
  const HumanName = userinfo.userNickName;
  const [DogInfo, setDogInfo] = useState('강아지가 없습니다');

  const user_info_func = async Id => {
    try {
      await getUserInfo(
        {userId: Id},
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
        {Id: 1}, //Id 로 바꿔줘야함
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

  useEffect(() => {
    user_info_func(Props.userId);
    user_puppy_info_func(Props.userId);
  }, []);

  useEffect(() => {
    if (puppyinfo.myPuppyList) {
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

  console.log('강아지콘솔', DogInfo);

  // console.log(puppyinfo.myPuppyList[0].puppyInfo.puppyName)
  // console.log("강아지 정보",puppyinfo.myPuppyList)
  return (
    <>
      {puppyinfo.myPuppyList !== undefined ? (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.push('FriendProfile', {userId: Props.userId});
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={Styles.requestContainer}>
                <Image
                  source={{uri: userinfo.userImg}}
                  resizeMode="contain"
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
                <View style={Styles.requestTextBox}>
                  <Text
                    style={{
                      ...Styles.requestText,
                      fontSize: 20,
                      marginTop: -15,
                    }}>
                    {HumanName}
                  </Text>
                  <Text
                    style={{...Styles.requestText, fontSize: 16, marginTop: 3}}>
                    {DogInfo}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </>
      ) : null}
    </>
  );
};

export default MyFriend;

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
});
