import { apiInstance } from "./Index";

const api = apiInstance();

export const loginCheckNewUser = async(data, success, fail) => {
    console.log("여기선 돌아가네요", data);
    return await api.get(`/user/kakaoLogin`, data).then(success).catch(fail);
}

export const findAllUser = async(success, fail) => {
    await api.get(`/user/findAll`).then(success).catch(fail);
}