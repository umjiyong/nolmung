import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Button,
  Image,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../AppInner';
// import {useAppDispatch} from '../store';
// import userSlice from '../slices/user';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';

import {loginKakao} from '../api/User';

import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

//NativeStackScreenProps : 
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const {width, height} = Dimensions.get('window');

function SignIn({navigation}: SignInScreenProps) {
  // function SignIn({navigation}) {
  //////////////////////////////
  // const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);
  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    Alert.alert('알림', '로그인 되었습니다.');
  }, [email, password]);

  const toSignUp = () => {
    navigation.navigate('SignUp');
  };

  const canGoNext = email && password;

  const [user, setUser] = useState({});

  type tokenType = {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    accessTokenExpiresAt: Date;
    refreshTokenExpiresAt: Date;
    scopes: string[];
};

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login().then(token => {
    // const signInWithKakao = async () => {
    //     const token = await login().then(token => {
      console.log(11, token);
      if (token) {
        loginKakao(
          token.accessToken,
          res => {
            AsyncStorage.setItem('accessToken', res.data.accessToken, () => {
              console.log('토큰 저장 완료');
            });
            const {id, email, name, image, nickname, profileOpen} =
              res.data.user;

        // dispatch(
        //   userSlice.actions.setUser({
        //     email: email,
        //     userName: name,
        //     userImage: image,
        //     loggedIn: true,
        //   }),
        // );
      },
      err => {
        console.log(err);
      },
    );
  }
});
setUser(token);
  };

  AsyncStorage.getItem('accessToken', (err, result) => {
    console.log(result);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/Dog1.jpg')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <Pressable style={{marginTop: 10}} onPress={signInWithKakao}>
          <Image source={require('../assets/kakaoLogin/kakao_login_large_wide.png')} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: (height * 2) / 7,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;