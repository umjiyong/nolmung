import {apiInstance} from "./Index";

const api = apiInstance();


export const user_puppy_info= async (response, success, fail) => {
console.log(response);
return await api
    .get(`/puppy/${response.userId}`)
    .then(success)
    .catch(fail);
};




export const puppy_puppy_info= async (response, success, fail) => {
    console.log(response);
    return await api
        .get(`/puppy/info/${response.puppyId}`)
        .then(success)
        .catch(fail);
    };


export const puppy_breed_info = async (success,fail) => {
    return await api.get(`/puppy/breedList`).then(success).catch(fail)
    }