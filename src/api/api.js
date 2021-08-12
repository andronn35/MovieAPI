import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/'  
})

export const movieAPI = {
  getMovies(limit, currentPage) {
    return instance.get(`list_movies.json?limit=${limit}&page=${currentPage}`)
      .then(response => response.data)
  },
  movieDetails(movieId) {
    return instance.get(`movie_details.json?movie_id=${movieId}`)
      .then(response => response.data)
  }
}