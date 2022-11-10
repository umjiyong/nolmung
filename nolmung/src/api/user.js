import apiInstance from "./Index";

const api = apiInstance();


export const user_info= async (response, success, fail) => {
console.log(response);
return await api
    .get(`/user/${response.userId}`)
    .then(success)
    .catch(fail);
};