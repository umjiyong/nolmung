import { apiInstance, apiLoginInstance } from "./Index";

const loginApi = apiLoginInstance();
const api = apiInstance();

export const loginCheckNewUser = async(data, success, fail) => {
    console.log("여기선 돌아가네요", JSON.stringify(data));
    return await loginApi.post(`/user/kakaoLogin`, data).then(success).catch(fail);
}

export const findAllUser = async(success, fail) => {
    await loginApi.get(`/user/findAll`).then(success).catch(fail);
}
