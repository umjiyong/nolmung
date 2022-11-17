import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiInstance, apiLoginInstance } from "./Index";

const nonLoginApi = apiLoginInstance();
const api = apiInstance();

export const registPuppyInfo = async (data, success, fail) => {
    AsyncStorage.getItem('userId', (err, res) => {
        nonLoginApi.post(`/puppy/register`, data).then(success).then(fail);
    })
<<<<<<< HEAD
}

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
=======
}
>>>>>>> d13e982 (update: 신규 로그인시 강아지 등록)
