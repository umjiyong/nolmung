import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import { getTest } from '../api/test';

function LoginScreen({navigation}) {
  const [Login, setLogin] = useState(true);

  const getTestData = async () => {
    try{  
      await getTest(
        (response) => {
          console.log("리스폰스는", response);
        },
        (err) => {
          console.log("에러는", err);
        }
      );
    }
    catch(err) {
      console.log("씨빨에러", err);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>놀면 멍하니</Text>

      <TouchableOpacity onPress={getTestData}><Text>테스트</Text></TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Login ? navigation.navigate('BottomTabs') : alert('로그인하세요');
        }}>
        <Image
          source={require('../assets/kakaoLogin/kakao_login_large_narrow.png')}
          resizeMode="contain"
          style={{
            height: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'NotoSansKR-Bold',
  },
});
