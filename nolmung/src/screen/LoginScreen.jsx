import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

function LoginScreen({navigation}) {
  const [Login, setLogin] = useState(true);

  return (
    <View style={style.container}>
      <Text style={style.text}>놀면 멍하니</Text>

      <TouchableOpacity
        onPress={() => {
          Login ? navigation.navigate('BottomTabs') : alert('로그인하세요');
        }}>
        <Image
          source={require('../assets/kakaoLogin/kakao_login_large_wide.png')}
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
