import {apiInstance,imageInstance} from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const imageApi = imageInstance();
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

export const getArticles_all = async (success, fail) => {
  return await api.get(`/board`).then(success).catch(fail);
};

export const getArticles_friend = async (response, success, fail) => {
  console.log(response);
  return await api
    .get(`/board/friend/${response.userId}`)
    .then(success)
    .catch(fail);
};

export const getArticles_qna = async (response, success, fail) => {
  return await api
    .get(`/board/category/${response.index}`)
    .then(success)
    .catch(fail);
};

export const getArticles_region = async (response, success, fail) => {
  console.log('gdgd', response);
  return await api
    .get(`/board/region/${response.userId}`)
    .then(success)
    .catch(fail);
};

export const getArticles_mine = async (response, success, fail) => {
  //   console.log('내 게시글', response);
  return await api
    .get(`/board/user/${response.userId}`)
    .then(success)
    .catch(fail);
};

export const getArticles_From_BoardId = async (response, success, fail) => {
  console.log('특정 게시물 조회', response);
  return await api.get(`/board/${response.boardId}`).then(success).catch(fail);
};

export const registArticleImage = async (response, success, fail) => {
  // await AsyncStorage.getItem('userId', (err, res) => {
    console.log('이미지 업로드쪽', response);
    imageApi.post(`/image/board/${response.boardId}`, response.data).then(success).catch(fail);
  // });
};

export const postBoard = async (response, success, fail) => {
  console.log('됬다 임마', response);
  return await api
    .post(`/board`, {
      "boardClass": response.boardClass,
      "boardContent": response.boardContent,
      "boardImg": response.boardImg,
      "userId": response.userId,
    }).then(success).catch(fail);
};
