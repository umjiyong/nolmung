import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAsyncStorage from "./useAsyncStorage";

const base_URL = "http://192.168.228.86:8080/nolmung";
// const base_URL = 'http://192.168.45.243:8080/nolmung';
// const base_URL = "http://k7a502.p.ssafy.io/nolmung";

export const apiInstance = () => {
  console.log('이것도 되네요 index.js', AsyncStorage.getItem('accessToken'));
  const token = useAsyncStorage;
  console.log('토큰 저장도 잘됨 index.js');
  const instance = axios.create({
    baseURL: base_URL,
    headers: {
      'Content-type': 'application/json',
      // Authorization: `Bearer ${token.accessToken}`,
    },
  });
  return instance;
};
