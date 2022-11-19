import {apiInstance} from './Index';

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

export const getUserBoardCnt = async (response, success, fail) => {
  return await api.get(`/board/count/${response.id}`).then(success).catch(fail);
};
