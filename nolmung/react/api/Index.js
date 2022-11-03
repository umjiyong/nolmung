import axios from "axios";
// const base_URL = "http://localhost:8080/";
const base_URL = "httpbin.org/";

export function ApiInstance(){
    const instace = axios.create({
      baseURL: base_URL,
      headers: {
        "Content-type" : "application/json",
        // Authorizatino : `Bearer ${localStorage.getItem("accessToken")}`,
        // Cookie: "refreshToken = value",
      },
      
    })
    return instace;
  }