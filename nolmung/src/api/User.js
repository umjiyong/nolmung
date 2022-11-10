import { apiInstance } from "./Index";

const api = apiInstance();

export const loginKakao = async(data, success, fail) => {
    return await api.get(`/user/regist/${data.userId}`).then(success).catch(fail);
  }