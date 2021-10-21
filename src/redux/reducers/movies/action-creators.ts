import { IFilm } from '../../../models/IFilm';
import { MovieActionEnum, SetFilmsAction, SortByRatingAction, SortByYearAction, SetLimitAction, SetIsLoadingAction, SetCurrentPageAction } from './types';
import { movieAPI } from '../../../api/api';
import { AppDispatch } from '../..';

export const MovieActionCreators = {
  setFilms: (payload: IFilm[]): SetFilmsAction => ({type: MovieActionEnum.SET_FILMS, payload}),
  sortByRating: (): SortByRatingAction => ({type: MovieActionEnum.SORT_BY_RATING}),
  sortByYear: (): SortByYearAction => ({type: MovieActionEnum.SORT_BY_YEAR}),
  setLimit: (payload: number): SetLimitAction => ({type: MovieActionEnum.SET_LIMIT, payload}),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: MovieActionEnum.SET_IS_LOADING, payload}),
  setCurrentPage: (payload: number): SetCurrentPageAction => ({type: MovieActionEnum.SET_CURRENT_PAGE, payload}),

  getMovies: (limit: number, currentPage: number) => {
    return (dispatch: AppDispatch) => {
      dispatch(MovieActionCreators.setIsLoading(true));
      movieAPI.getMovies(limit, currentPage).then((data) => {
        dispatch(MovieActionCreators.setIsLoading(false));
        dispatch(MovieActionCreators.setFilms(data.data.movies));      
      });
    }
  }
} 
