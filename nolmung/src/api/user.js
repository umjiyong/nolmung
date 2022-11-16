import apiInstance from "./Index";

const api = apiInstance();


export const user_info= async (response, success, fail) => {
console.log(response);
return await api
    .get(`/user/${response.userId}`)
    .then(success)
    .catch(fail);
};



export const user_info_change= async (response, success, fail) => {
    console.log("유저정보 수정 콘솔",response);
    return await api
        .put(`/user/regist/${response.userId}`,response)
        .then(success)
        .catch(fail);
    };
    

