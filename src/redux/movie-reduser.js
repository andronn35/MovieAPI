import { movieAPI } from "./../api/api";

let SET_FILMS = "SET_FILMS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_MOVIE_COUNT = "SET_TOTAL_MOVIE_COUNT";

let initialState = {
  films: [],
  pageSize: 7,
  currentPage: 1,
  totalMovieCount: 0,
};

const movieReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: action.movies,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_MOVIE_COUNT:
      return {
        ...state,
        totalMovieCount: action.totalMovieCount,
      };
    default:
      return state;
  }
};

export const setFilms = (movies) => ({ type: SET_FILMS, movies });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalMovieCount = (totalMovieCount) => ({
  type: SET_TOTAL_MOVIE_COUNT,
  totalMovieCount,
});

export const getMovies = (currentPage, pageSize) => {
  return (dispatch) => {    debugger
    movieAPI.getMovies(currentPage, pageSize).then((data) => {
      dispatch(setFilms(data.data.movies));
      dispatch(setTotalMovieCount(data.data.movie_count));
    });
  };
};

export default movieReduser;
