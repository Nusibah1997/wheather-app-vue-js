import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
});
export const key = "81e21499a2c31724aea948b1bf36fc5e";