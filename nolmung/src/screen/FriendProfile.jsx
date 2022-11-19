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
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import MyDog from '../components/MyDog';
import Modal from 'react-native-modal';
import LandMark from '../components/LandMark';
import {useNavigation} from '@react-navigation/native';
import {user_info} from '../api/User';
import {user_puppy_info} from '../api/Puppy';
import {user_friend_post} from '../api/Friend';

function FriendProfile({navigation: {navigate}, route}) {
  console.log('ㅎㅇㅎㅇ', route.params);
  const navigation = useNavigation();
  const Friend = 1;
  const Post = 1;
  const [userdata, setuserdata] = useState([]);
  const FriendName = userdata.userNickName;
  const FriendAddress = userdata.userAddressText;
  const friendCode = userdata.userCode;

  const intro = userdata.userIntroduction;
  const introText = {
    // text: '있습니다.'
  };
  const backdropOpacity = 0.5;
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [puppyinfo, setpuppyinfo] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  const user_info_func = async id => {
    try {
      await user_info(
        {userId: id},
        response => {
          setuserdata(response.data);
        },
        err => {
          console.log('아티클질문 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };

  const user_puppy_info_func = async Id => {
    try {
      await user_puppy_info(
        {userId: Id},
        response => {
          setpuppyinfo(response.data);
          console.log('친구 강아지', puppyinfo);
        },
        err => {
          console.log('강아지정보 에러', err);
        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
      //되는 코드입니다.//
    }
  };

  useEffect(() => {
    user_info_func(2);
    user_puppy_info_func(2);

    console.log('유저값', userdata);
  }, []);

  console.log(userdata);

  const user_friend_post_func = async () => {
    try {
      await user_friend_post(
        {fromUserId: 1, toUserId: 2}, // 이부분은 프롭스 받은것도 아니라서 네비게이션으로 id받아야댐
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

  return (
    <>
      <Header HeaderName="프로필" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        {/* Start Header */}
        {/* End Header */}
        {/* Start Profile */}
        {/* touchablewithoutfeedback 검색 */}
        <View style={Styles.profile}>
          <Image
            source={require('../assets/icons/Ellipse.png')}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
            }}
          />
          <TouchableOpacity onPress={user_friend_post_func}>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                backgroundColor: '#fff',
                borderRadius: 15,
                shadowColor: '#959595',
                elevation: 3,
              }}>
              <Text style={{fontSize: 16, color: '#FF772F'}}>친구 신청</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={toggleModal}>
            <View style={{ paddingVertical:5, paddingHorizontal:15, backgroundColor:'#fff',borderRadius: 15, shadowColor:'#959595', elevation:3}}>
                <Text style={{fontSize: 16, color: '#FF772F'}}>친구</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <View style={{ paddingVertical:5, paddingHorizontal:15, backgroundColor:'#fff',borderRadius: 15, shadowColor:'#959595', elevation:3}}>
                <Text style={{fontSize: 16, color: '#FF772F'}}>차단된 사용자</Text>
            </View>
          </TouchableOpacity> */}
          {/* 친구신청모달 시작 */}

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            backdropOpacity={backdropOpacity}>
            <View style={Styles.modalStyle}>
              <Text style={Styles.modalText}>친구 신청</Text>
              <TextInput
                multiline={true}
                style={Styles.modalInput}
                value={text}
                onChangeText={e => {
                  setText(e);
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 'auto',
                  marginBottom: 30,
                }}>
                <TouchableOpacity
                  style={{marginHorizontal: 80}}
                  onPress={toggleModal}>
                  <View>
                    <Text style={{color: '#282828', fontSize: 20}}>취소</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginHorizontal: 80}}>
                  <View>
                    <Text style={{color: '#282828', fontSize: 20}}>전송</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
                {FriendName}
              </Text>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 18,
                  fontFamily: 'NotoSansKR-Medium',
                }}>
                ({FriendAddress})
              </Text>
            </View>
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
        {puppyinfo.myPuppyList ? (
          <>
            {puppyinfo.myPuppyList.map((item, index) => {
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
          <Text>반려견을 추가해주세요</Text>
        )}
        {/* End Dog Component */}
        {/* <TouchableOpacity style={{...Styles.MyPost}}>
          <View style={Styles.MyPostBtn}>
            <Text style={Styles.MyPostText}>게시글</Text>
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
        </TouchableOpacity> */}
        {/* <View style={Styles.Landmark}>
            <Text style={Styles.LandmarkHeader}>자주 가는 랜드마크 </Text>
        </View>
        <ScrollView horizontal={true} style={{marginBottom:30,}} showsHorizontalScrollIndicator={false}>
              <LandMark name="땡땡 놀이터"/>
              <LandMark name="우리집"/>
              <LandMark name="태경이형 집"/>
              <LandMark name="레고 랜드"/>
              <LandMark name="잠실 롯데타워" />
              <LandMark name="태경이형 앞마당"/>
              <LandMark name="태경이형 방"/>
              <LandMark name="태경이형 화장실"/>
              
        </ScrollView> */}
      </ScrollView>
    </>
  );
}

export default FriendProfile;

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
  modalStyle: {
    flex: 0.5,
    marginHorizontal: -20,
    height: '50%',
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: -20,
  },
  modalText: {
    color: '#282828',
    fontWeight: '600',
    fontSize: 18,
  },
  modalInput: {
    borderWidth: 0.5,
    borderColor: '#525252',
    width: '80%',
    height: 80,
    marginTop: 30,
    borderRadius: 15,
    color: '#282828',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  Landmark: {
    marginHorizontal: 20,
  },
  LandmarkHeader: {
    fontSize: 18,
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
  },
});
