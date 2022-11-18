import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const base_URL = "http://192.168.128.66:8080/nolmung";
const base_URL = 'https://k7a502.p.ssafy.io/nolmung';

//사용자 정보가 필요한 경우
export const apiInstance = () => {
  // console.log('이것도 되네요 index.js', AsyncStorage.getItem('accessToken'));
  // const token = useAsyncStorage;
  // console.log('토큰 저장도 잘됨 index.js', token.Bearer);
  const instance = axios.create({
    baseURL: base_URL,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
      isLogined: `LOGIN`,
    },
  });
  return instance;
};

// 사용자 정보 없이 읽어와도 되는 경우
export const apiLoginInstance = () => {
  const instance = axios.create({
    baseURL: base_URL,
    headers: {
      'Content-type': 'application/json',
      IsLogined: `NOTLOGIN`,
    },
  });
  return instance;
};
