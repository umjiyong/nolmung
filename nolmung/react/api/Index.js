import axios from "axios";
// const base_URL = "http://localhost:8080/";
const base_URL = "https://httpbin.org/";

export function ApiInstance(){
    const instance = axios.create({
      baseURL: base_URL,
      // headers: {
      //   "Content-type" : "multipart/form-data",
      //   // Authorizatino : `Bearer ${localStorage.getItem("accessToken")}`,
      //   // Cookie: "refreshToken = value",
      // },
      
    })
    return instance;
  }