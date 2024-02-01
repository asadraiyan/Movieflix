import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjkxOGY2MzQ1MjI1N2U2ZmY3NjczMjY4YWMyNSIsInN1YiI6IjY1Yjc1YjY1ODc0MWM0MDEzMDkxNDY2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Vxjc3T55aEfNn3JjDYWqLV76O_nMBnBJBhyxkAcZ98";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchApiData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
