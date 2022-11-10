import apiInstance from "./Index";

const api = apiInstance();


export const getArticles_all= async (success, fail) => {
    
    return await api
      .get(`/board`)
      .then(success)
      .catch(fail);
  };

export const getArticles_friend= async (response, success, fail) => {
console.log(response);
return await api
    .get(`/board/friend/${response.userId}`)
    .then(success)
    .catch(fail);
};


export const getArticles_qna= async (response, success, fail) => {
    console.log(response);
    return await api
        .get(`/board/category/${response.index}`)
        .then(success)
        .catch(fail);
    };


export const getArticles_region= async (response, success, fail) => {
    console.log(response);
    return await api
        .get(`/board/region/${response.userId}`)
        .then(success)
        .catch(fail);
    };