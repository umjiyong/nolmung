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

export const getFriendList = async (response, success, fail) => {
  await api.get(`/friend/${response.id}`).then(success).catch(fail);
};

export const user_friend_proposal = async (response, success, fail) => {
  return await api
    .get(`/friend/proposal/${response.userId}`)
    .then(success)
    .catch(fail);
};

export const user_friend_random = async (response, success, fail) => {
  return await api
    .get(`/friend/recommend/${response.userId}`)
    .then(success)
    .catch(fail);
};

export const user_friend_search = async (response, success, fail) => {
  return await api
    .get(`/friend/search/${response.userCode}`)
    .then(success)
    .catch(fail);
};

export const user_friend_post = async (response, success, fail) => {
  console.log('친구 post 신청 api 호출');
  return await api
    .post(`/friend/send`, {
      fromUserId: response.fromUserId,
      toUserId: response.toUserId,
    })
    .then(success)
    .catch(fail);
};
