import { movieAPI } from "../api/api";

let SET_FILMS = "SET_FILMS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let SET_LIMIT = "SET_LIMIT";
let TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  films: [],
  limit: 8,
  currentPage: 1,
  totalMovieCount: 0,
  isLoading: false,
};

const movieReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: action.movies,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.limit,
      };
    
    default:
      return state;
  }
};

export const setFilms = (movies) => ({ type: SET_FILMS, movies });
export const setLimit = (limit) => ({ type: SET_LIMIT, limit });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});


export const getMovies = (limit, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    movieAPI.getMovies(limit, currentPage).then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setFilms(data.data.movies));
      
    });
  };
};

export default movieReduser;
