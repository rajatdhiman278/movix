import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmZiNzU3ODM0NWVlYmNhYWQ4MjM0MjJiMTA3Njk2MSIsInN1YiI6IjY0NTc0YWM2ZmUwNzdhMDBlNDNmZjM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qos93B6mSiXx1jABPCwJph7A-n0PCfx_2L3ycwmusLg";
// const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDateFromAPi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
