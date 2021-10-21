import { IFilm } from "../../../models/IFilm";

export interface MovieState{
  films: IFilm[]
  limit: number,
  currentPage: number,
  totalMovieCount: number,
  isLoading: boolean
};

export enum MovieActionEnum {
  SET_FILMS = "SET_FILMS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_LIMIT = "SET_LIMIT",
  SET_IS_LOADING = "SET_IS_LOADING",
  SORT_BY_RATING = "SORT_BY_RATING",
  SORT_BY_YEAR = "SORT_BY_YEAR"
}

export interface SetFilmsAction {
  type: MovieActionEnum.SET_FILMS;
  payload: IFilm[]
}
export interface SetCurrentPageAction {
  type: MovieActionEnum.SET_CURRENT_PAGE;
  payload: number
}
export interface SetLimitAction {
  type: MovieActionEnum.SET_LIMIT;
  payload: number
}
export interface SetIsLoadingAction {
  type: MovieActionEnum.SET_IS_LOADING;
  payload: boolean
}
export interface SortByRatingAction {
  type: MovieActionEnum.SORT_BY_RATING
}
export interface SortByYearAction {
  type: MovieActionEnum.SORT_BY_YEAR
}

export type MovieAction =
  SetFilmsAction |
  SetCurrentPageAction |
  SetLimitAction |
  SetIsLoadingAction |
  SortByRatingAction |
  SortByYearAction