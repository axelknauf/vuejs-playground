import axios from "axios";

export const DDG_HTTP = axios.create({
  baseURL: "https://api.duckduckgo.com/q=",
  headers: {}
});
