export interface DetailsState {
  title: string;
  genres: string[];
  description: string;
  imgUrl: string;
  isLoading: boolean;
}

export enum DetailsActionEnum {
  SET_TITLE = "SET_TITLE",
  SET_GENRES = "SET_GENRES",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_IMG_URL = "SET_IMG_URL",
  SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetTitleAction {
  type: DetailsActionEnum.SET_TITLE;
  payload: string
}
export interface SetGenresAction {
  type: DetailsActionEnum.SET_GENRES;
  payload: string[]
}
export interface SetDescriptionAction {
  type: DetailsActionEnum.SET_DESCRIPTION;
  payload: string
}
export interface SetImgUrlAction {
  type: DetailsActionEnum.SET_IMG_URL;
  payload: string
}
export interface SetIsLoadingAction {
  type: DetailsActionEnum.SET_IS_LOADING;
  payload: boolean
}

export type DetailsAction =
  SetTitleAction |
  SetGenresAction |
  SetDescriptionAction |
  SetImgUrlAction |
  SetIsLoadingAction
