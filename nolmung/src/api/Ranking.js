import {apiInstance} from './Index';
const api = apiInstance();

export const getAllRanking_daily = async (response, success, fail) => {
    console.log(response);
    return await api
        .get(`/rank/${response.type}/findAll`)
        .then(success)
        .catch(fail);
};

export const getAllRanking_weekly = async(response, success, fail) => {
    console.log(response);
    return await api
        .get(`/rank/${response.type}/findAll`)
        .then(success)
        .catch(fail)
};

export const getAllRanking_monthly = async(response, success, fail) => {
    console.log(response);
    return await api
        .get(`/rank/${response.type}/findAll`)
        .then(success)
        .catch(fail)
};

export const registRanking_daily = async (data, success, fail) => {
    await api
      .post(`/rank/regist/daily/${data.userId}`, data)
      .then(success)
      .catch(fail);
  };
  export const registRanking_weekly = async (data, success, fail) => {
    await api
      .post(`/rank/regist/weekly/${data.userId}`, data)
      .then(success)
      .catch(fail);
  };
  
  export const registRanking_monthly = async (data, success, fail) => {
    await api
      .post(`/rank/regist/monthly/${data.userId}`, data)
      .then(success)
      .catch(fail);
  };
  
  export const putUserRank = async (response, success, fail) => {
    await api
      .put(`rank/plus/${response.userId}/${response.rankScore}`)
      .then(success)
      .catch(fail);
  };
  
  