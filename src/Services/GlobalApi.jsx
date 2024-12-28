import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '7161694fffa43794ae68f0609dface68';
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key" + api_key)
const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTYxNjk0ZmZmYTQzNzk0YWU2OGYwNjA5ZGZhY2U2OCIsIm5iZiI6MTcyMjcwODE0OS42MDM4OTYsInN1YiI6IjY2YWU2ODhlNjgyNjE3ZDIxNTgwZTQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gGhecM3TSaVRpOGTXnpymk4VuigCpVk1fH0pt6z_Tk';

// const apiClient = axios.create({
//     baseURL: getTrendingVideos,
//     headers: {
//       'Authorization': `Bearer ${jwtToken}`
//     }
// });

export default {
    getTrendingVideos,jwtToken
};