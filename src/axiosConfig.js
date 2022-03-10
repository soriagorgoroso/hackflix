const axiosConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7e168bd7360b960bbcf7cbd2d95f02b4",
    page: 1,
    include_adult: false,
    lenguage: "en-US",
    "vote_count.gte": 5,
  },
};

export default axiosConfig;
