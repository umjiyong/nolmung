import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  DeviceEventEmitter,
} from 'react-native';
import Category from '../components/Category';
import MiddleHeader from '../components/MiddleHeader';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import {registArticleImage} from '../api/Article';
import {postBoard} from '../api/Article';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfo} from '../api/User';

const NewArticle = () => {
  const [value, setValue] = useState();
  const [selectClass, setSelectClass] = useState(0);
  const [userData, setUserData] = useState([]);
  const [imgBody,setimgBody] = useState("")

  const user_info_func = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        getUserInfo(
          {id:2}, // id로 바꿔야함 
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
  console.log('userData', userData.regionId);

  

  const PostArticleFunc = async () => {
    
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        postBoard({
          userId: 102,
          boardClass: selectClass,
          boardContent: value,
          boardImg: ["http://dummyimage.com/193x100.png/5fa2dd/ffffff"],
          
        },
          res => {
            console.log('성공?', res.data);
            console.log(imgBody,res)
            Article_image_upload_func(imgBody,res.data)
          },
          
        )
      });
      
    } catch (err) {
      console.log('에러에러', err);
    }
  };


  const Article_image_upload_func = async (data,boardId) => {
    try {
      await registArticleImage(
        {boardId:boardId , data:data},
        response => {
          console.log(response.data);
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

  useEffect(() => {
    user_info_func();
  }, []);

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

            setimgBody(body);
          },
        );
      } catch (err) {
        console.log(err);
        console.log('심각한 에러;;');
      }
    };

  return (
    <>
      <MiddleHeader header="새 게시물" />
      <TouchableOpacity
        onPress={PostArticleFunc}
        style={{position: 'absolute', top: 18, right: 20}}>
        <Image source={require('../assets/icons/Check.png')} />
      </TouchableOpacity>

      <View style={Styles.NewArticleContainer}>
        <View style={{flexDirection: 'row'}}>
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
                source={require("../assets/icons/camera.png")}
                resizeMode="contain"
                style={{
                width: 100,
                height: 100,
                
                }}
            />
            )}
            </Pressable>
          <TextInput
            onChangeText={e => setValue(e)}
            style={{marginLeft: 10, color: '#282828'}}
            placeholder="문구 입력..."
            placeholderTextColor={'#959595'}
            value={value}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#C2C2C2',
            marginTop: 15,
          }}></View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#282828', fontSize: 22, fontWeight: '600'}}>
            카테고리
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectClass(0);
                console.log('일상글', selectClass);
              }}>
              <View>
                <Text>일상 글</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectClass(3);
                console.log('질문있어요', selectClass);
              }}>
              <View>
                <Text>질문 있어요</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default NewArticle;

const Styles = StyleSheet.create({
  NewArticleContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  ArticleImageSample: {
    width: 70,
    height: 70,
    backgroundColor: 'gray',
  },
  categoryText: {
    color: '#fff',
  },
  SelectedCategory: {
    backgroundColor: '#FF772F',
    marginHorizontal: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  Category: {
    backgroundColor: '#959595',
    marginHorizontal: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
