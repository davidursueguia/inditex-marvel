import axios from "axios";

const API_URL = "https://gateway.marvel.com:443/v1/public";
const API_KEY = "ae2c5fc52f9cbe1d9a37899fa1bc469e";
const HASH = "67601d0c6e12326694cca4abea7721fe";
const TS = "1";

const api = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
    ts: TS,
    hash: HASH,
  },
});

export default api;
