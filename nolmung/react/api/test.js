import { ApiInstance } from "./Index";

const api = ApiInstance();

export const getTest = async(success, fail) => {
    return await api.get(`get`).then(success).catch(fail);
}