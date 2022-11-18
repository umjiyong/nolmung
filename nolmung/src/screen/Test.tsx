import React, {useCallback, useRef, useState, useEffect} from 'react';
import BottomTabs from '../navigation/BottomTabs';
import {
  Alert,
  Pressable,
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
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

import {findAllUser, loginCheckNewUser} from '../api/User';

import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

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
  const [kakaoToken, setKakaoToken] = useState('');
  const [isLogin, setIsLogin] = useState(false);

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

  const signInWithKakao = async (): Promise<void> => {
    console.log('누름?!');
    const token: KakaoOAuthToken = await login().then(token => {
      console.log(11, token);
      if (token) {
        AsyncStorage.setItem('accessToken', token.accessToken, () => {
          console.log('토큰 저장 완료');
        });
        try {
          console.log('로그인 axios 연결 시작', token.accessToken);
          loginCheckNewUser(
            {accessToken: token.accessToken, refreshToken: token.refreshToken},
            res => {
              console.log('무엇일까요?', res.data.Bearer, res.data.user);
              AsyncStorage.setItem('userId', res.data.user[0], () => {
                console.log('사용자 아이디 저장 완료');
              });
              AsyncStorage.setItem('Bearer', res.data.Bearer, () => {
                console.log('토큰 저장 완료');
              });
              res.data.user[1] == 'old'
                ? navigation.navigate('BottomTabs')
                : navigation.navigate('NewUserInfo');
              // navigation.navigate('NewUserInfo')
            },
            // const {id, email, name, image, nickname, profileOpen} =
            //   res.data.user;
            err => {
              console.log('Test.tsx에러다', err);
            },
          );
        } catch (err) {
          console.log('로그인 실패');
        }
      }
    });
    setUser(token);
    // navigation.navigate('BottomTabs');
    // navigation.navigate('NewUserInfo');
  };

  // AsyncStorage.getItem('accessToken', (err, result) => {
  //   console.log('저장소 확인 Test.tsx', result);
  //   if (result != null) setIsLogin(true);
  //   else setIsLogin(false);

  //   setKakaoToken(JSON.stringify(result));
  // });

  const deleteAsync = () => {
    console.log('삭제했당');
    AsyncStorage.clear();
  };

  const getAll = () => {
    console.log('전체조회 클릭됨');
    try {
      findAllUser(
        res => {
          console.log('통신성공!', res);
        },
        err => {
          console.log('통신실패!', err);
        },
      );
    } catch (err) {
      console.log('완전 에러', err);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>놀면 멍하니</Text>
      <Image source={require('../assets/image/Dog1.jpg')} style={style.logo} />
      <TouchableOpacity onPress={signInWithKakao}>
        {console.log(isLogin)}
        <Image
          source={require('../assets/kakaoLogin/kakao_login_large_wide.png')}
          resizeMode="contain"
          style={{
            height: 50,
          }}
        />
      </TouchableOpacity>

      {/* <View style={style.buttonContainer}>
        <Pressable style={{marginTop: 10}} onPress={signInWithKakao}>
          <Image source={require('../assets/kakaoLogin/kakao_login_large_wide.png')} />
        </Pressable>
      </View> */}
      <View style={style.buttonContainer}>
        <Pressable style={{marginTop: 10}} onPress={deleteAsync}>
          <Text>async storage 삭제</Text>
        </Pressable>
        <Pressable style={{marginTop: 10}} onPress={getAll}>
          <Text>유저 전체정보 조회</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
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
  text: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'NotoSansKR-Bold',
  },
});

export default SignIn;
