import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json'  
})

export const movieAPI = {
  getMovies(currentPage, pageSize) {
    return instance.get(`?limit=8&page=${currentPage}&movie_count=${pageSize}`)
      .then(response => response.data)
  }
}