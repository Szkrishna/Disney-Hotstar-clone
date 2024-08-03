import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '16eea50334e0534b02898d52b0633959';
const getTrendingVideos = axios.get(movieBaseUrl + "//trending/all/day?api_key" + api_key)

export default {
    getTrendingVideos
}