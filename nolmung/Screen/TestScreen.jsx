import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

function TestScreen({navigation}) {
  const [Login, setLogin] = useState(true);

  return (
    <View style={style.container}>
      <Text style={style.text}>랜드마크 테스트 페이지입니다</Text>

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

export default TestScreen;

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
