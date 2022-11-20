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


export const postLandmark = async (data, success, fail) => {
    console.log('랜드마크 보드 추가', data);
    await api.post(`/landmark/board`, {
        "content": data.content,
        "imageUrl": data.imageUrl ,
        "landmarkBoardCreateDate": data.landmarkBoardCreateDate,
        "landmarkId": data.landmarkId,
        "userId": data.userId
      }).then(success).then(fail);
  };


export const getLandmarkArticleList = async (response, success, fail) => {
    console.log("랜드마크 게시글 리스트 가져오기",response);
    return await api
      .get(`/landmark/boardList/${response.landmarkId}`)
      .then(success)
      .catch(fail);
  };

export const getLandmarkArticle = async (response, success, fail) => {
    console.log("랜드마크 게시글 정보 가져오기",response);
    return await api
      .get(`/landmark/board/${response.landmarkBoardId}`)
      .then(success)
      .catch(fail);
  };



export const getLandmark = async (data, success, fail) => {
        console.log('랜드마크 정보 가져오기', data);
        await api.post(`/landmark`,{
            landmarkId: data.landmarkId,
            userId: data.userId
          }).then(success).then(fail);
        };



export const getLandmarkVisitor = async (response, success, fail) => {
    console.log("랜드마크 방문자 정보 가져오기",response);
    return await api
        .get(`/landmark/visit/${response.landmarkId}`)
        .then(success)
        .catch(fail);
    };

