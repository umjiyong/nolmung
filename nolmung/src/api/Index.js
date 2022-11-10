import axios from "axios";

const base_URL = "http://localhost:8080/nolmung";
// const base_URL = "http://k7a502.p.ssafy.io/nolmung";

export const apiInstance = () => {
    console.log("이것도 되네요");
    const instance = axios.create({
        baseURL: base_URL,
        headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
    });
    return instance;
}