import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/'  
})

export const movieAPI = {
  getMovies(limit: number, currentPage: number) {
    return instance.get(`list_movies.json?limit=${limit}&page=${currentPage}`)
      .then(response => response.data)
  },
  movieDetails(movieId: number) {
    return instance.get(`movie_details.json?movie_id=${movieId}`)
      .then(response => response.data)
  }
}