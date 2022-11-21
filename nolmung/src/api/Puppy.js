import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiInstance, apiLoginInstance, imageInstance} from './Index';

const nonLoginApi = apiLoginInstance();
const api = apiInstance();
const imageApi = imageInstance();
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

export const getUserPuppyInfo = async (response, success, fail) => {
  return await api.get(`/puppy/${response.id}`).then(success).catch(fail);
};

export const puppy_puppy_info = async (response, success, fail) => {
  console.log(response);
  return await api
    .get(`/puppy/info/${response.puppyId}`)
    .then(success)
    .catch(fail);
};

export const puppy_breed_info = async (success, fail) => {
  return await api.get(`/puppy/breedList`).then(success).catch(fail);
};

export const puppy_Modify = async (data, success, fail) => {
  console.log('강아지 정보 수정', data);
  return await api.put(`/puppy/modify`, data).then(success).catch(fail);
};

export const registPuppyImage = async (data, success, fail) => {
  console.log(
    '강아지 정보 아이디',
    data.puppyId,
    '강아지 데이터 폼',
    data.form,
  );
  await imageApi
    .post(`/image/puppy/${data.puppyId}`, data.form)
    .then(success)
    .catch(fail);
};
