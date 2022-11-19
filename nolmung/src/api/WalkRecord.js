import {apiInstance, apiLoginInstance} from './Index';

const loginApi = apiLoginInstance();
const api = apiInstance();

export const getPuppyList = async (request, success, fail) => {
  console.log('강아지 목록조회 api 호출');
  await api.post(`/walk/puppyList`, request).then(success).catch(fail);
};

export const getRecordList = async (request, success, fail) => {
  console.log('일일 산책 목록조회 api 호출');
  await api.post(`/walk/dailyRecordList`, request).then(success).catch(fail);
};

export const getLandmarkMarkerList = async (success, fail) => {
  console.log('랜드마크 마커 api 호출');
  await api.get(`/landmark/list`).then(success).catch(fail);
};
