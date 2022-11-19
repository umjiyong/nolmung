import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiInstance, apiLoginInstance} from './Index';

const nonLoginApi = apiLoginInstance();
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

export const registPuppyInfo = async (data, success, fail) => {
  console.log('강아지정보 등록', data);
  await api.post(`/puppy/register`, data).then(success).then(fail);
};

export const user_puppy_info = async (response, success, fail) => {
  console.log(response);
  return await api.get(`/puppy/${response.userId}`).then(success).catch(fail);
};

export const puppy_puppy_info = async (response, success, fail) => {
  console.log(response);
  return await api
    .get(`/puppy/info/${response.puppyId}`)
    .then(success)
    .catch(fail);
};

export const getBreedInfo = async (success, fail) => {
  return await api.get(`/puppy/breedList`).then(success).catch(fail);
};
