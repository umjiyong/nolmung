import React, {useState} from 'react';

import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Header from '../Components/Header';
import MyDog from '../Components/MyDog';

function MyProfileScreen({navigation}) {

  const Friend = 1;
  const Post = 1;
  const userName = '하루';
  const userAddress = '전남 여수시 선원동';
  const friendCode = '#E1VH64';
  const [intro, setIntro] = useState('소개글이 없습니다');
  const introText = {
    // text: '있습니다.'
  };

  return (
    <>
      <Header HeaderName="마이 페이지" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        {/* Start Header */}
        {/* End Header */}
        {/* Start Profile */}
        {/* touchablewithoutfeedback 검색 */}
        <View style={Styles.profile}>
          <Image
            source={require('../assets/icons/man1Avatar.png')}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <View style={Styles.friendPostBox}>
            <View style={Styles.friendBox}>
              <Text style={Styles.FriendCountText}>{Friend}</Text>
              <Text style={Styles.FriendText}>친구</Text>
            </View>
            <View style={Styles.PostBox}>
              <Text style={Styles.PostCountText}>{Post}</Text>
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
                {userName}
              </Text>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 18,
                  fontFamily: 'NotoSansKR-Medium',
                }}>
                ({userAddress})
              </Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.push('MyProfileModify')}}>
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
              {friendCode}
            </Text>
          </View>
        </View>
        {introText.text ? (
          <View style={Styles.introInput}>
            <View style={Styles.introBox}>
              <Text style={{color: '#282828'}}>{introText.text}</Text>
            </View>
          </View>
        ) : (
          <View style={Styles.introInput}>
            <View style={Styles.introBox}>
              <Text style={Styles.introText}>{intro}</Text>
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
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        {/* End Dog Component */}
        <TouchableOpacity style={Styles.MyPost}>
          <View style={Styles.MyPostBtn}>
            <Text style={Styles.MyPostText}>내 게시물</Text>
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
    marginBottom: 15,
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
