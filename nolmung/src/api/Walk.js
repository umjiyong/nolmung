import {apiInstance, apiLoginInstance} from './Index';

const loginApi = apiLoginInstance();
const api = apiInstance();

export const getPuppyList = async (request, success, fail) => {
  console.log('산책 기록 강아지 목록 조회 api 호출');
  await api.post(`/walk/puppyList`, request).then(success).catch(fail);
};

export const getRecordList = async (request, success, fail) => {
  console.log('일일 산책 목록 조회 api 호출');
  await api.post(`/walk/dailyRecordList`, request).then(success).catch(fail);
};

// export const getLandmarkMarkerList = async (success, fail) => {
//   console.log('랜드마크 마커 api 호출');
//   await api.get(`/landmark/list`).then(success).catch(fail);
// };

export const getNearLandmarkMarkerList = async (request, success, fail) => {
  // console.log('내 근처 랜드마크 마커 api 호출');
  await api.post(`/landmark/nearList`, request).then(success).catch(fail);
};

export const getMyPuppyList = async (request, success, fail) => {
  console.log('나의 강아지 목록 조회 api 호출');
  await api.get(`/puppy/${request.userId}`).then(success).catch(fail);
};

export const getWalkRecordDetail = async (request, success, fail) => {
  console.log('산책 기록 상세 조회 api 호출');
  await api.get(`walk/${request.walkId}`).then(success).catch(fail);
};

export const getWalkStatistics = async (request, success, fail) => {
  console.log('산책 통계 조회 api 호출');
  return await api
    .get(`/walkStatistics/${request.puppyId}`)
    .then(success)
    .catch(fail);
};
