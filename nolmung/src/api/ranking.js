import apiInstance from "./Index";

const api = apiInstance();

export const getAllRanking_daily = async (data, success, fail) => {
    console.log(data);
    await api.get('/rank/daily/findAll')
}

export const getAllRanking_weekly = async(data, success, fail) => {
    console.log(data);
    await api.get('/rank/weekly/findAll')
}

export const getAllRanking_monthly = async(data,success,fail) => {
    console.log(data)
    await api.get('/rank/monthly/findAll')
}


export const registRanking_daily = async (data, success, fail) => {
    await api.post(`/rank/regist/daily/${data.userId}`,data).then(success).catch(fail)
}
export const registRanking_weekly = async (data, success, fail) => {
    await api.post(`/rank/regist/weekly/${data.userId}`,data).then(success).catch(fail)
}

export const registRanking_monthly = async (data, success, fail) => {
    await api.post(`/rank/regist/monthly/${data.userId}`,data).then(success).catch(fail)
}


export const putUserRank = async(response,success,fail) => {
    await api.put(`rank/plus/${response.userId}/${response.rankScore}`)
    .then(success)
    .catch(fail)
}