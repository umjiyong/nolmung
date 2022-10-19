import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function LoginScreen({navigation}) {
  const [Login, setLogin] = useState(true);
  return (
    <View style={style.container}>
      <Text>로그인 하세요</Text>
      <Button
        title="Kakao Login"
        onPress={() => {
          Login ? navigation.navigate('BottomTabs') : null;
        }}
      />
    </View>
  );
}

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
