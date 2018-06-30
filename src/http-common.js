import axios from "axios";

export const DUMMY_HTTP = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {}
});
