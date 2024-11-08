import axios from "axios";

const hostOracle = "http://localhost:4000";
const token = "dsa8uyda7g6snd7sgnd68saf7dsa9n7daus9dim0sa";

export const api = axios.create({
  baseURL: hostOracle,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});
