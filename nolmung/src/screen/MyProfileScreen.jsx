import React, {useState,useEffect} from 'react';

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
  Pressable
} from 'react-native';
import Header from '../components/Header';
import MyDog from '../components/MyDog';
import {user_info,registUserInfo} from "../api/User"
import {user_puppy_info} from "../api/Puppy"
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';


function MyProfileScreen({navigation}) {
  const [userinfo,setuseinfo] = useState([])
  const [puppyinfo,setpuppyinfo] = useState([])
  const Friend = 1;
  const Post = 1;
  const userName = '하루';
  const userAddress = '전남 여수시 선원동';
  const friendCode = '#E1VH64';
  const [intro, setIntro] = useState('소개글이 없습니다');
  const [photo,setPhoto] = useState("")
  
  
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
      
      await user_info(
        { userId: 1 },
        (response) => {
          setuseinfo(response.data);
        },
        (err) => {
          console.log("유저정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };


  const user_puppy_info_func = async () => {
    try {
      
      await user_puppy_info(
        { userId: 1 },
        (response) => {
          setpuppyinfo(response.data);
        },
        (err) => {
          console.log("강아지정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
      //되는 코드입니다.//
    }
  };


  


  
  useEffect(() => {
    user_info_func();
    user_puppy_info_func();
  }, []);
  
  console.log("유저사진",userinfo.userImg)
 




  const user_info_change_func = async (data) => {
    try {
      
      await registUserInfo(
        { userImg: data },
        (response) => {
          console.log(response)
        },
        (err) => {
          console.log("강아지정보 에러", err);
        }
      );
    } catch (err) {
      console.log(err);
      console.log("심각한 에러;;");
    }
  };




  const [response, setResponse] = useState();
  const onSelectImage = () => {
    try {
      
      launchImageLibrary(
        {
          mediaType: "photo",
          maxWidth: 512,
          maxHeight: 512,
          includeBase64: Platform.OS === 'android',
        },
        (res) => {
          console.log(res);
          if (res.didCancel) return;
          setResponse(res);
          user_info_change_func(response?.assets[0]?.uri)




        })
      
    }
      catch (err) {
        console.log(err);
        console.log("심각한 에러;;");
      }
      
    
    }



  return (
    <>
      <Header HeaderName="마이 페이지" />
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={Styles.profile}>
        <Pressable onPress={onSelectImage}>
            {response ?  <Image
              source={{uri: response?.assets[0]?.uri}}
              
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
              }}
            /> : <Image
            source={{uri : userinfo.userImg}}
            
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
            }}
          />}
        </Pressable>
         
          {/* <Button title="이미지 선택" onPress={showPicker} ></Button>  */}
          
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
                {userinfo.userNickName}
              </Text>
              <Text
                style={{
                  color: '#282828',
                  fontSize: 18,
                  fontFamily: 'NotoSansKR-Medium',
                }}>
                {userinfo.userAddressText}
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
              {userinfo.userCode}
            </Text>
          </View>
        </View>
        {userinfo ? (
          <View style={Styles.introInput}>
            <View style={Styles.introBox}>
              <Text style={{color: '#282828'}}>{userinfo.userIntroduction}</Text>
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


        {(puppyinfo.myPuppyList) ? (
            <>
            
                {(puppyinfo.myPuppyList).map((item,index)=>{
                  
                  return (<MyDog
                  key = {index}
                  puppyId = {item.puppyInfo.puppyId}
                  puppyImg = {item.puppyInfo.puppyImg}
                  puppyName = {item.puppyInfo.puppyName}
                  puppyAge = {item.puppyInfo.puppyAge}
                  breedName = {item.puppyInfo.breedName}
                  
                  />)
                })}
                
               
              
            </>
          ): <Text>반려견을 추가해주세요</Text>}       
      
        
        {/* End Dog Component */}
        <TouchableOpacity style={Styles.MyPost}>
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
