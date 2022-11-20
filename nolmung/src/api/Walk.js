import {apiInstance, apiLoginInstance, imageInstance} from './Index';

const imageApi = imageInstance();
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

export const registWalkImage = async (response, success, fail) => {
  console.log('이미지 업로드쪽', response);
  imageApi
    .post(`/image/walk/${response.walkId.walkList[0]}`, response.data)
    .then(success)
    .catch(fail);
};

export const addNewWalkRecord = async (request, success, fail) => {
  console.log('산책 등록  api 호출');
  console.log(request);
  return await api
    .post(`/walk`, {
      "puppyIdList": request.puppyIdList,
      "userId": request.userId,
      "walkDistance": request.walkDistance,
      "walkEndTime": request.walkEndTime,
      "walkStartTime": request.walkStartTime,
      "walkUserImg": request.walkUserImg,
    })
    .then(success)
    .catch(fail);
}; 
