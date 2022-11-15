import axios from 'axios';

const base_URL = 'https://k7a502.p.ssafy.io/nolmung';

const apiInstance = () => {
    const instance = axios.create({
        baseURL : base_URL,
        headers: {
            'Content-type': 'application/json',
            IsLogined: `NOTLOGIN`,
        },
    });
    return instance;
}

export default apiInstance