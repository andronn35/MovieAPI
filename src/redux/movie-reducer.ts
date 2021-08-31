import { movieAPI } from "../api/api";

let SET_FILMS = "SET_FILMS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_LIMIT = "SET_LIMIT";
let TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

type InitislStateType = typeof initialState
type FilmsType = {
  id: number          
  title: string
  rating: number
  genres: string[]
  medium_cover_image: string
}

let initialState = {
  films: [] as Array<FilmsType>,
  limit: 8,
  currentPage: 1,
  totalMovieCount: 0,
  isLoading: false,
};

const movieReduser = (state = initialState, action: any): InitislStateType => {
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

type setFilmsActionType = {
  type: typeof SET_FILMS
  movies: Array<FilmsType>
}
type setLimitActionType = {
  type: typeof SET_LIMIT
  limit: number
}
type toggleIsLoadingActionType = {
  type: typeof TOGGLE_IS_LOADING
  isLoading: boolean
}
type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setFilms = (movies: Array<FilmsType>): setFilmsActionType => ({ type: SET_FILMS, movies })
export const setLimit = (limit: number): setLimitActionType => ({ type: SET_LIMIT, limit })
export const toggleIsLoading = (isLoading: boolean): toggleIsLoadingActionType => ({
    type: TOGGLE_IS_LOADING,
    isLoading,
  })
  export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
  })

export const getMovies = (limit: number, currentPage: number): any => {
  return (dispatch: any) => {
    dispatch(toggleIsLoading(true));
    movieAPI.getMovies(limit, currentPage).then((data: any) => {
      dispatch(toggleIsLoading(false));
      dispatch(setFilms(data.data.movies));      
    });
  };
};


export default movieReduser;
