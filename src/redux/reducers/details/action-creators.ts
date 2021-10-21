import { DetailsActionEnum, SetDescriptionAction, SetGenresAction, SetImgUrlAction, SetIsLoadingAction, SetTitleAction } from "./types";
import { movieAPI } from './../../../api/api';
import { AppDispatch } from "../..";

export const DetailsActionCreators = {
  setTitle: (payload: string): SetTitleAction => ({ type: DetailsActionEnum.SET_TITLE, payload }),
  setGenres: (payload: string[]): SetGenresAction => ({ type: DetailsActionEnum.SET_GENRES, payload }),
  setDescription: (payload: string): SetDescriptionAction => ({ type: DetailsActionEnum.SET_DESCRIPTION, payload }),
  setImgUrl: (payload: string): SetImgUrlAction => ({ type: DetailsActionEnum.SET_IMG_URL, payload }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: DetailsActionEnum.SET_IS_LOADING, payload }),

  getDetails: (movieId: number) => (dispatch: AppDispatch) => {
    dispatch(DetailsActionCreators.setIsLoading(true));
    movieAPI.movieDetails(movieId).then((data) => {
      dispatch(DetailsActionCreators.setIsLoading(false))
      dispatch(DetailsActionCreators.setTitle(data.data.movie.title_long))
      dispatch(DetailsActionCreators.setGenres(data.data.movie.genres))
      dispatch(DetailsActionCreators.setDescription(data.data.movie.description_full))
      dispatch(DetailsActionCreators.setImgUrl(data.data.movie.large_cover_image))
    })
  }
}

