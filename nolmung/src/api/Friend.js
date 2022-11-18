import {apiInstance} from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = apiInstance();
api.interceptors.request.use(async config => {
  if (!config.headers) {
    return config;
  }
  let token = null;

  token = await AsyncStorage.getItem('accessToken');

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const user_friend_list = async (response, success, fail) => {
  console.log('친구 api 호출');
  return await api.get(`/friend/${response.userId}`).then(success).catch(fail);
};


export const user_friend_proposal= async (response, success, fail) => {
    console.log("친구 추천 알람? api 호출");
    return await api
        .get(`/friend/proposal/${response.userId}`)
        .then(success)
        .catch(fail);
    };
    

export const user_friend_random= async (response, success, fail) => {
    console.log("친구 랜덤? api 호출");
    return await api
        .get(`/friend/recommend/${response.userId}`)
        .then(success)
        .catch(fail);
    };