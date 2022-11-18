import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '@react-native-seoul/kakao-login';
import {apiInstance, apiLoginInstance} from './Index';

const loginApi = apiLoginInstance();
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

export const loginCheckNewUser = async (data, success, fail) => {
  // console.log("여기선 돌아가네요", JSON.stringify(data));
  return await loginApi
    .post(`/user/kakaoLogin`, data)
    .then(success)
    .catch(fail);
};

export const findAllUser = async (success, fail) => {
  await loginApi.get(`/user/findAll`).then(success).catch(fail);
};


export const registUserInfo = async (data, success, fail) => {
  await AsyncStorage.getItem('userId', (err, res) => {
    api.put(`/user/regist/${res}`, data).then(success).catch(fail);
  });
};

export const user_info = async (response, success, fail) => {
  console.log(response);
  return await api.get(`/user/${response.userId}`).then(success).catch(fail);
};


export const user_info_change = async(response, success, fail) => {
    
    // console.log('유저 정보 수정 콘솔', response);
    return await api
        .put(`/user/regist/${response.userId}`, {userNickName: response.userNickName,
            userAddressText : response.userAddressText,
            userIntroduction : response.userIntroduction})
        .then(success)
        .catch(fail)
}

