import { MovieState, MovieAction, MovieActionEnum } from './types';

const initialState: MovieState = {
  films: [],
  limit: 8,
  currentPage: 1,
  totalMovieCount: 0,
  isLoading: false,
};

export default function movieReduser(state = initialState, action: MovieAction): MovieState {
  switch (action.type) {
    case MovieActionEnum.SET_FILMS:
      return {...state, films: action.payload}
    case MovieActionEnum.SORT_BY_RATING:
      return {...state, films: [...state.films.sort((a, b) => b.rating - a.rating)]}
    case MovieActionEnum.SORT_BY_YEAR:
      return {...state, films: [...state.films.sort((a: any, b: any) => b.year - a.year)]}
    case MovieActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case MovieActionEnum.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case MovieActionEnum.SET_LIMIT:
      return {...state, limit: action.payload}
    default:
      return state;
  }
};