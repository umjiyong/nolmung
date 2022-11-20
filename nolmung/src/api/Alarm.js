import {apiInstance} from './Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = apiInstance();

export const registAlarm = async (data, res, err) => {
  console.log('알림 등록', JSON.stringify(data));
  await api
    .post(`/inAppAlarm`, data)
    .then(res => {
      console.log('알림 등록 성공', res);
    })
    .catch(err => {
      console.log('알림 등록 실패', err);
    });
};

export const getAlarmList = async (response, res, err) => {
  console.log('알림 목록 조회', JSON.stringify(response));
  return await api
    .get(`/inAppAlarm/${response.userId}`)
    .then(res => res.data)
    .catch(err);
};

export const updateAlarmRead = async (data, res, err) => {
  console.log('읽음 처리할 알림 목록: ' + data);
  return await api
    .put(`/inAppAlarm`, data)
    .then(res => res.data)
    .catch(err);
};
