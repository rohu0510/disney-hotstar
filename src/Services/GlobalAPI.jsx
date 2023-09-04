import axios from "axios";

const movieBaseUrl= "https://api.themoviedb.org/3"
const api_key = '7bdb5fb3f4d83b250932c9fd9c57dd86'

//https://api.themoviedb.org/3/movie/550?api_key=7bdb5fb3f4d83b250932c9fd9c57dd86

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

export default{
    getTrendingVideos
}