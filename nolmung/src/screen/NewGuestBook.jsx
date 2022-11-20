import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import Category from '../components/Category';
import MiddleHeader from '../components/MiddleHeader';
import {postLandmark} from '../api/Landmark';
import {useNavigation} from '@react-navigation/native';
import {registLandmarkImage} from '../api/Landmark';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewGuestBook = ({navigation: {navigate}, route}) => {
  // console.log('파람확인', route.params.landmarkId);
  const [value, setValue] = useState('');
  const navi = useNavigation();
  // const [content,setcontent] = useState("")
  const [imageUrl, setimageUrl] = useState('');
  const landmarkBoardCreateDate = new Date();
  const landmarkId = route.params.landmarkId;
  const [imgBody, setimgBody] = useState('');


  const postLandmarkFunc = async () => {
    try {
      await AsyncStorage.getItem('userId', (err, id) => {
        postLandmark(
          {
            content: value,
            imageUrl: '',
            landmarkBoardCreateDate: landmarkBoardCreateDate,
            landmarkId: landmarkId,
            userId: id,
          }, // id로 바꿔야함
          response => {
            console.log('랜드마크 보드 포스트 성공');
            console.log('충전기', response.data.landmarkBoardId);
            landmark_image_upload_func(imgBody, response.data.landmarkBoardId);
            console.log('담은것', imgBody, response.data.landmarkBoardId);
          },
        );
      });
    } catch (err) {
      console.log('유저정보페이지 유저정보 get 에러', err);
    }
  };

  const landmark_image_upload_func = async (data, landmarkBoardId) => {
    try {
      await registLandmarkImage(
        {landmarkBoardId: landmarkBoardId, data: data},
        response => {
          console.log(response);
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
          console.log('이미지 고르고 이벤트', res.assets[0].uri);
          if (res.didCancel) return;
          setResponse(res);


          var body = new FormData();
          body.append('files', {
            uri: res.assets[0].uri,
            type: 'image/jpeg',
            name: `${res.assets[0].fileName}`,
          });

          setimgBody(body)
          

        },
      );
    } catch (err) {
      console.log(err);
      console.log('심각한 에러;;');
    }
  };


  return (
    <>
      <MiddleHeader header="새 방명록" />
      <TouchableOpacity
        onPress={() => {
          postLandmarkFunc();
          navi.goBack();
        }}
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
                source={require('../assets/icons/camera.png')}
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
      </View>
    </>
  );
};

export default NewGuestBook;


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
});
