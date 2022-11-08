import axios from 'axios';

const base_URL = 'http://k7a502.p.ssafy.io/nolmung';

const apiInstance = () => {
    const instance = axios.create({
        baseURL : base_URL,
    });
    return instance;
}

export default apiInstance