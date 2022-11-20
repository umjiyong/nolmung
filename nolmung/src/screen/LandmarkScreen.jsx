import React, {useState,useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import GoBackHeader from '../components/GoBackHeader';
import VisitMemo from '../components/VisitMemo';
import Visitors from '../components/Visitors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfo} from "../api/User"
import {getLandmark,postLandmark,getLandmarkArticle,getLandmarkVisitor,getLandmarkArticleList} from "../api/Landmark"

function LandmarkScreen({navigation: {navigate}, route}) {

  const [landmarkArticle,setlandmarkArticle] =useState([])
  const [userInfo,setuserInfo] = useState([])
  const [landmarkInfo,setlandmarkInfo] =useState([])
  const [landmarkVisitor,setlandmarkVisitor] =useState([])
  const [landmarkAritlelist,setlandmarkAritlelist] =useState([])

  const user_info_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getUserInfo(
          {id : 1},
          response => {
            setuserInfo(response.data);
          },
          
        );
      });
    } catch (err) {
      console.log('유저정보페이지 유저정보 get 에러', err);
    }
  };


  const getLandmarkArticleFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getLandmarkArticle(
          {landmarkBoardId : route.params.landmarkId},
          response => {
            setlandmarkArticle(response.data);
          },
          
        );
      });
    } catch (err) {
      console.log('유저정보페이지 유저정보 get 에러', err);
    }
  };


  const getLandmarkFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getLandmark(
          {
            landmarkId: route.params.landmarkId,
            userId: 1 // userid 1 로 되있다면 어싱크로 바꿔야
          },
          response => {
            setlandmarkInfo(response.data);
          },
          
        );
      });
    } catch (err) {
      console.log('유저정보페이지 유저정보 get 에러', err);
    }
  };

  const [content,setcontent] = useState("")
  const [imageUrl, setimageUrl] = useState("")
  const [landmarkBoardCreateDate, setlandmarkBoardCreateDate] = useState("")
  const [landmarkId, setlandmarkId] = useState("")
  const [userId, setuserId] = useState("")

  const postLandmarkFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        postLandmark(
          {content: content,
          imageUrl: imageUrl ,
          landmarkBoardCreateDate: landmarkBoardCreateDate,
          landmarkId: landmarkId,
          userId: userId},
          response => {
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
  


  const getLandmarkArticleListFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getLandmarkArticleList(
          {landmarkId : route.params.landmarkId},
          response => {
            setlandmarkAritlelist(response.data);
          },
          
        );
      });
    } catch (err) {
      console.log('랜드마크 방문자 get 에러', err);
    }
  };




  const getLandmarkVisitorFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getLandmarkVisitor(
          {landmarkId : route.params.landmarkId},
          response => {
            setlandmarkVisitor(response.data);
          },
          
        );
      });
    } catch (err) {
      console.log('랜드마크 방문자 get 에러', err);
    }
  };

  useEffect(() => {
    getLandmarkFunc();
    getLandmarkVisitorFunc();
    getLandmarkArticleListFunc();
  }, []);

  // useEffect(() => {
    
  //   getLandmarkArticleListFunc();
  // }, [landmarkAritlelist]);
  
  console.log("랜드마크 아티클리스트",landmarkAritlelist.landmarkBoardList)
  return (
    <>
    
      {landmarkInfo.landmarkInfo ? <>
      <GoBackHeader />

      <View style={{flex: 1}}>
        {/* Header start */}
        <View style={style.Header}>
          <Text style={{color: '#282828', fontWeight: '600', fontSize: 18}}>
            {landmarkInfo.landmarkInfo.landmarkName} 
          </Text>
          {/* <Image
            source={require('../assets/icons/Vector.png')}
            resizeMode="contain"
          /> */}
        </View>
        {/* Header End */}
        {/* 이미지 */}
        {landmarkInfo.landmarkInfo.landmarkImg ? <Image 
                    source={{uri : landmarkInfo.landmarkInfo.landmarkImg}}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                    }}
                /> : <Image 
                    source={require('../assets/icons/background.png')}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                    }}
                /> }
      
        <View
          style={{justifyContent: 'center', paddingLeft: 20, marginTop: 10}}>
          <Text
            style={{
              color: '#282828',
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            방문한 사람
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      
            {landmarkVisitor.visitorList ? (
              <>
                {landmarkVisitor.visitorList.map((item, index) => {
                  return <Visitors key={index} profileImg = {item.profileImg} />;
                })}
              </>
            ) : <Text>사진이 등록되지 않았습니다</Text>}
          </ScrollView>
        </View>
        <View style={style.memo}>
          <Text style={{color: '#282828', fontSize: 18, fontWeight: '600'}}>
            방명록
          </Text>
          <Pressable onPress={()=>{
            navigation.push('NewGuestBook')
          }} style={style.writebtn}>
            <Text style={{color: '#fff', fontWeight: '500'}}>글쓰기</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{padding: 20}}>

        {landmarkAritlelist.landmarkBoardList ? (
              <>
                {landmarkAritlelist.landmarkBoardList.map((item, index) => {
                  return(<VisitMemo key={index} 
                  boardImage = {item.boardImage}
                  content = {item.content}
                  createDate = {item.createDate}
                  landmarkBoardId = {item.landmarkBoardId}
                  nickname = {item.nickname} />) 
                })}
              </>
            ) : <Text>글이 등록되지 않았습니다</Text>}
          
        </ScrollView>
      </View>
    </> : null}
    </>
  );
}

export default LandmarkScreen;

const style = StyleSheet.create({
  Header: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  memo: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  writebtn: {
    backgroundColor: '#ff772f',
    paddingVertical: 4,
    paddingHorizontal: 13,
    marginTop: 5,
    borderRadius: 10,
  },
});
