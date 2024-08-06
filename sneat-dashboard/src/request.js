import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://project4-mongodb-express.onrender.com",
  timeout: 5000,
});

export default instance;
