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
      <Text style={style.text}>랜드마크 테스트 페이지</Text>
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
