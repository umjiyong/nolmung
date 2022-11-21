import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Pressable,
  DeviceEventEmitter,
} from 'react-native';
import Header from '../components/Header';
import MyDog from '../components/MyDog';

import {getUserInfo, registUserImage, registUserInfo} from '../api/User';
import {getUserPuppyInfo} from '../api/Puppy';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFriendList} from '../api/Friend';
import {getUserBoardCnt} from '../api/Board';
import axios from 'axios';

function MyProfileScreen({navigation}) {
  const [userData, setUserData] = useState([]);
  const [puppyData, setPuppyData] = useState([]);
  const [friendCnt, setFriendCnt] = useState();
  const [boardCnt, setBoardCnt] = useState();
  console.log(userData);
  const Friend = 1;
  const Post = 1;
  const userName = '하루';
  const userAddress = '전남 여수시 선원동';
  const friendCode = '#E1VH64';
  const [intro, setIntro] = useState('소개글이 없습니다');

  const [photo, setPhoto] = useState('');

  // onSetFlag()

  // const showPicker = async () =>{
  //   const grantedcamera = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //     {
  //       title : "App Camera Permission",
  //       message : "GOGO",
  //       buttonNeutral : "Ask me later",
  //       buttonNegative : "cancel",
  //       buttonPositive : "OK"
  //     }
  //   )

  //   const grantedstorage = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     {
  //       title : "App Camera Permission",
  //       message : "GOGO",
  //       buttonNeutral : "Ask me later",
  //       buttonNegative : "cancel",
  //       buttonPositive : "OK"
  //     }
  //   )
  //   console.log(grantedcamera)
  //   if(grantedcamera ===PermissionsAndroid.RESULTS.GRANTED && grantedstorage===PermissionsAndroid.RESULTS.GRANTED){
  //     console.log("camera ok")
  //   }else{
  //     console.log("camera x")
  //   }

  // }

  // const imgChange = () =>{
  //   showPicker();

  // }

  const user_info_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getUserInfo(
          {id},
          response => {
            console.log(response.data);
            setUserData(response.data);
          },
          err => {
            console.log('유저정보 에러', err);
          },
        );
      });
    } catch (err) {
      console.log('유저정보페이지 유저정보 get 에러', err);
    }
  };

  const user_puppy_info_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getUserPuppyInfo(
          {id},
          response => {
            setPuppyData(response.data);
          },
          err => {
            console.log('강아지정보 에러', err);
          },
        );
      });
    } catch (err) {
      console.log('내정보 페이지 getUserPuppyData 에러', err);
      //되는 코드입니다.//
    }
  };

  const get_friend_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getFriendList(
          {id},
          response => {
            setFriendCnt(response.data.length);
          },
          error => {
            console.log('내 친구정보 가져오기 통신에러', error);
          },
        );
      });
    } catch (error) {
      console.log('유저 친구수 가져오기 에러', error);
    }
  };

  const get_board_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getUserBoardCnt(
          {id},
          response => {
            setBoardCnt(response.data);
          },
          error => {
            console.log('내 보드정보 가져오기 통신에러', error);
          },
        );
      });
    } catch (error) {
      console.log('유저 보드수 가져오기 에러', error);
    }
  };
  console.log('friendCnt', friendCnt);
  useEffect(() => {
    user_info_func();
    user_puppy_info_func();
    get_friend_func();
    get_board_func();
    DeviceEventEmitter.addListener('abc', () => {
      user_info_func();
      user_puppy_info_func();
    });
  }, []);

  const user_image_upload_func = async data => {
    try {
      console.log('유저이미지는?', data);
      await registUserImage(
        data,
        response => {
          console.log(response);
        },
        err => {
          console.log('유저 사진 업로드 에러', err);
        },
      );
    } catch (err) {
      console.log('유저 사진 업로드심각한 에러;;', err);
    }
  };

  const [response, setResponse] = useState();
  const onSelectImage = async () => {
    try {
      launchImageLibrary(
        {
          mediaType: 'photo',
          maxWidth: 512,
          maxHeight: 512,
          includeBase64: Platform.OS === 'android',
        },
        res => {
          console.log('이미지 고르고 이벤트', res);
          if (res.didCancel) return;
          setResponse(res);

          var body = new FormData();
          body.append('files', {
            uri: res.assets[0].uri,
            type: 'image/jpeg',
            name: `${res.assets[0].fileName}`,
          });

          user_image_upload_func(body);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  return (
    <>
      <Header HeaderName="마이 페이지" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <View style={Styles.profile}>
          <Pressable onPress={onSelectImage}>
            {response ? (
              <Image
                source={{uri: response?.assets[0]?.uri}}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
              />
            ) : (
              <Image
                source={{uri: userData.userImg}}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
              />
            )}
          </Pressable>

          {/* <Button title="이미지 선택" onPress={showPicker} ></Button>  */}

          <View style={Styles.friendPostBox}>
            <View style={Styles.friendBox}>
              <Text style={Styles.FriendCountText}>{friendCnt}</Text>
              <Text style={Styles.FriendText}>친구</Text>
            </View>
            <View style={Styles.PostBox}>
              <Text style={Styles.PostCountText}>{boardCnt}</Text>
              <Text style={Styles.PostText}>게시글</Text>
            </View>
          </View>
        </View>
        <View style={Styles.profileInfo}>
          <View style={Styles.infoBox}>
            <View style={Styles.info}>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 18,
                  fontFamily: 'NotoSansKR-Medium',
                  marginRight: 5,
                }}>
                {userData.userNickName}
              </Text>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 15,
                  fontFamily: 'NotoSansKR-Medium',
                }}>
                ({userData.userAddressText})
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.push('MyProfileModify');
              }}>
              <Image
                source={require('../assets/icons/menuvertical.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: -5,
              marginBottom: 5,
            }}>
            <Text
              style={{
                color: '#282828',
                marginRight: 5,
              }}>
              친구코드
            </Text>
            <Text
              style={{
                color: '#282828',
              }}>
              {userData.userCode}
            </Text>
          </View>
        </View>
        {userData ? (
          <View style={Styles.introInput}>
            <View style={Styles.introBox}>
              <Text style={{color: '#282828'}}>
                {userData.userIntroduction}
              </Text>
            </View>
          </View>
        ) : (
          <View style={Styles.introInput}>
            <View style={Styles.introBox}>
              <Text style={Styles.introText}>소개글이 없습니다</Text>
            </View>
          </View>
        )}
        {/* End Profile */}

        <View style={Styles.myDog}>
          <View style={{marginTop: -8}}>
            <Text style={Styles.myDogTitle}>나의 반려견</Text>
          </View>
        </View>
        {/* Dog component */}

        {puppyData.myPuppyList !== undefined ? (
          <>
            {/* {console.log('puppyData', puppyData)} */}
            {puppyData.myPuppyList.map((item, index) => {
              {
                // console.log('item', item);
              }
              return (
                <MyDog
                  key={index}
                  puppyId={item.puppyInfo.puppyId}
                  puppyImg={item.puppyInfo.puppyImg}
                  puppyName={item.puppyInfo.puppyName}
                  puppyAge={item.puppyInfo.puppyAge}
                  breedName={item.puppyInfo.breedName}
                />
              );
            })}
          </>
        ) : (
          <Text style={{textAlign: 'center'}}>반려견을 추가해주세요</Text>
        )}

        {/* End Dog Component */}
        <TouchableOpacity
          onPress={() => navigation.push('MyArticle')}
          style={Styles.MyPost}>
          <View style={Styles.MyPostBtn}>
            <Text style={Styles.MyPostText}>내 게시글</Text>
            <Image
              source={require('../assets/icons/RightArrow.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: '#FF772F',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Setting}
          onPress={() => navigation.push('SettingScreen')}>
          <View style={Styles.SettingBtn}>
            <Text style={Styles.SettingText}>설정</Text>
            <Image
              source={require('../assets/icons/RightArrow.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: '#FF772F',
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

export default MyProfileScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  profile: {
    flex: 0.8,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  friendPostBox: {
    flexDirection: 'row',
  },
  friendBox: {
    width: 72,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  FriendCountText: {
    fontFamily: 'Roboto-Regular',
    color: '#FF772F',
    fontSize: 24,
  },
  FriendText: {
    color: '#282828',
    fontSize: 18,
  },
  PostBox: {
    width: 72,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PostCountText: {
    fontFamily: 'Roboto-Regular',
    color: '#FF772F',
    fontSize: 24,
  },
  PostText: {
    color: '#282828',
    fontSize: 18,
  },
  profileInfo: {
    flex: 0.4,
    marginHorizontal: 20,
    marginTop: 0,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
  },
  introInput: {
    flex: 0.8,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 7,
  },
  introBox: {
    height: 100,
    borderRadius: 24,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    fontSize: 14,
    color: '#959595',
    fontFamily: 'NotoSansKR-Regular',
  },
  myDog: {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  myDogTitle: {
    fontSize: 18,
    fontFamily: 'NotoSansKR-Bold',
    color: '#282828',
  },
  MyPost: {
    marginHorizontal: 20,
  },
  MyPostText: {
    fontSize: 18,
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
  },
  MyPostBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Setting: {
    marginHorizontal: 20,
    marginBottom: 130,
  },
  SettingBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SettingText: {
    fontSize: 18,
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
  },
});
