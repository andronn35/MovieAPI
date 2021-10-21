import { DetailsAction, DetailsActionEnum, DetailsState } from './types';

const initialState: DetailsState = {
  title: "",
  genres: [],
  description: "",
  imgUrl: "",
  isLoading: false,
};

export default function detailsReducer(state = initialState, action: DetailsAction): DetailsState {
  switch (action.type) {
    case DetailsActionEnum.SET_TITLE:
      return {...state, title: action.payload,}
    case DetailsActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case DetailsActionEnum.SET_GENRES:
      return {...state, genres: action.payload}
    case DetailsActionEnum.SET_DESCRIPTION:
      return {...state, description: action.payload}
    case DetailsActionEnum.SET_IMG_URL:
      return {...state, imgUrl: action.payload}
    default:
      return state;
  }
};