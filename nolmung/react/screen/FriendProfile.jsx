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
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import MyDog from '../components/MyDog';
import Modal from "react-native-modal";
import LandMark from '../components/LandMark';

function MyProfileScreen({navigation}) {

  const Friend = 1;
  const Post = 1;
  const FriendName = '미이';
  const FriendAddress = '서울 종로구 난계로';
  const friendCode = '#E1VH64';
  const [intro, setIntro] = useState('소개글이 없습니다');
  const introText = {
    // text: '있습니다.'
  };
  const backdropOpacity = 0.5
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('')
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible)
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
          <TouchableOpacity onPress={toggleModal}>
            <View style={{ paddingVertical:5, paddingHorizontal:15, backgroundColor:'#fff',borderRadius: 15, shadowColor:'#959595', elevation:3}}>
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
            backdropOpacity = {backdropOpacity}
            
          >
            <View style={Styles.modalStyle}>
                
                <Text style={Styles.modalText}>친구 신청</Text>
                <TextInput multiline={true} style={Styles.modalInput} value={text} onChangeText={(e)=>{setText(e)}}/>
        
                <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:'auto', marginBottom: 30}}>
                    <TouchableOpacity style={{marginHorizontal:80,}} onPress={toggleModal}>
                        <View>
                            <Text style={{color: '#282828', fontSize: 20,}}>
                                취소
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal:80,}}>
                        <View>
                            <Text style={{color: '#282828', fontSize: 20,}}>
                                전송
                            </Text>
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
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        <MyDog />
        {/* End Dog Component */}
        <TouchableOpacity style={{...Styles.MyPost}}>
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
        </TouchableOpacity>
        <View style={Styles.Landmark}>
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
              
        </ScrollView>
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
  modalStyle: {
    flex:0.5,
    marginHorizontal: -20,
    height: '50%', 
    backgroundColor: '#fff', 
    marginTop:'auto',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    alignItems:'center',
    paddingTop: 15,
    marginBottom: -20,
  },
  modalText: {
    color: '#282828',
    fontWeight:'600',
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
    textAlign:'center'
  },
  Landmark:{
    marginHorizontal:20,
  },
  LandmarkHeader:{
    fontSize: 18,
    color: '#282828',
    fontFamily: 'NotoSansKR-Bold',
  }
});
