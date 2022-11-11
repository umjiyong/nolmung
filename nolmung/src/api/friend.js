import apiInstance from "./Index";

const api = apiInstance();


export const user_friend_list= async (response, success, fail) => {
console.log("친구 api 호출");
return await api
    .get(`/friend/${response.userId}`)
    .then(success)
    .catch(fail);
};