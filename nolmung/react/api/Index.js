import axios from "axios";
const base_URL = "http://localhost:8080/";

export function NolApiInstance(){
    const instace = axios.create({
      baseURL: base_URL,
      headers: {
        "Content-type" : "application/json",
        Authorizatino : `Bearer ${localStorage.getItem("accessToken")}`,
        // Cookie: "refreshToken = value",
      },
      
    })
    return instace;
  }