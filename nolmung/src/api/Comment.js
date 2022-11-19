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

export const getAllCommentFromArticle = async (response, success, fail) => {
  // console.log('댓글 보드 아이디', response);
  await api
    .post(`/comment/list`, {boardId: response.boardId, userId: response.userId})
    .then(success)
    .catch(fail);
};

export const PostComment = async (response, success, fail) => {
  console.log('댓글 작성 성공', response);
  await api
    .post(`/comment`, {
      boardId: response.boardId,
      content: response.content,
      userId: response.userId,
    })
    .then(success)
    .catch(fail);
};

export const deleteComment = async (response, success, fail) => {
  console.log('댓글 삭제', response);
  await api
    .delete(`/comment`, {
      boardCommentId: response.boardCommentId,
      userId: response.userId,
    })
    .then(success)
    .catch(fail);
};
