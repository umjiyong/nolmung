import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MiddleHeader from '../components/MiddleHeader';
import {registWalkImage, addNewWalkRecord} from '../api/Walk';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import { useNavigation } from '@react-navigation/native';
const EndWalkScreen = ({navigation: {navigate}, route}) => {
  const navi = useNavigation()
  const [response, setResponse] = useState();
  const [imgBody, setimgBody] = useState();
  console.log('!!!', route.params.requestData);
  console.log(route)
  const addNewWalkRecordFunc = async route => {
    try {
      await addNewWalkRecord(
        {
          puppyIdList: route.params.requestData.puppyList,
          userId: route.params.requestData.userId,
          walkDistance: route.params.requestData.walkDistance,
          walkEndTime: route.params.requestData.endTime,
          walkStartTime: route.params.requestData.startTime,
          walkUserImg: '',
        },
        res => {
          console.log('성공?', res.data);
          console.log(imgBody, res);
          walk_image_upload_func(res.data, imgBody);
        },
        err => {
          console.log('산책 등록 에러', err);
        },
      );
    } catch (error) {
      // console.log(err);
      console.log('산책 등록 조회 에러');
    }
  };

  const walk_image_upload_func = async (walkId, data) => {
    try {
      await registWalkImage(
        {walkId: walkId, data: data},
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
      <MiddleHeader header="내 산책 기록" />

      <Pressable onPress={onSelectImage}>
        {response ? (
          <View style={{alignItems:'center',}}> 
            <Image
              source={{uri: response?.assets[0]?.uri}}
              resizeMode="contain"
              style={{
                marginTop: 150,
                width: 200,
                height: 100,
                // borderRadius: 100,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'transparent',
            }}>
            <Image
              source={require('../assets/icons/camera.png')}
              resizeMode="contain"
              style={{
                marginTop: 150,
                width: 70,
                height: 70,
              }}
            />
          </View>
        )}
      </Pressable>

      {/* <Image
        source={require('../assets/icons/imageBg.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 200,
        }}
      /> */}

      <View style={Styles.Container}>
        <View style={Styles.box}>
          <Text style={{color: '#282828', fontSize: 16, textAlign: 'center'}}>
            산책한 거리
          </Text>
          <Text style={{color: '#FF772F', fontSize: 18, textAlign: 'center'}}>
           {route.params.requestData.walkDistance}
          </Text>
        </View>
        <View style={Styles.box}>
          <Text style={{color: '#282828', fontSize: 16, textAlign: 'center'}}>
            산책한 시간
          </Text>
          <Text style={{color: '#FF772F', fontSize: 18, textAlign: 'center'}}>
            {route.params.requestData.min}분 {route.params.requestData.sec}초
          </Text>
        </View>
      
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          alignItems: 'center',
        }}>
        {/* 사진 */}
        {/* <Pressable
          style={{
            backgroundColor: '#959595',
            width: '100%',
            height: 200,
          }}>
          <View
            style={{
              backgroundColor: '#959595',
              width: '100%',
              height: 200,
            }}></View>
        </Pressable> */}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          marginTop: 'auto',
          marginBottom: 50,
        }}>
        <Pressable
          onPress={() => {
            addNewWalkRecordFunc(route);
            navi.goBack()
          }}
          style={{
            paddingVertical: 13,
            paddingHorizontal: 37,
            backgroundColor: '#FF772F',
            borderRadius: 18,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>산책 등록</Text>
        </Pressable>
      </View>
    </>
  );
};

export default EndWalkScreen;

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#959595',
    elevation: 5,
  },
});
