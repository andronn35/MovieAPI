import { movieAPI } from "../api/api";

let SET_TITLE = "SET_TITLE";
let SET_GENRES = "SET_GENRES";
let SET_DESCRIPTION = "SET_DESCRIPTION";
let SET_IMG_URL = "SET_IMG_URL";
let TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

type InitialStateType = typeof initialState

let initialState = {
  title: "",
  genres: [],
  description: "",
  imgUrl: "",
  isLoading: false,
};

const detailsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.genres,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };
    case SET_IMG_URL:
      return {
        ...state,
        imgUrl: action.imgUrl,
      };
    default:
      return state;
  }
};

type setTitleActionType = {
  type: typeof SET_TITLE
  title: string
}
export const setTitle = (title: string): setTitleActionType => ({ type: SET_TITLE, title });

type setGenresActionType = {
  type: typeof SET_GENRES
  genres: string[]
}
export const setGenres = (genres: string[]): setGenresActionType => ({ type: SET_GENRES, genres });

type toggleIsLoadingActionType = {
  type: typeof TOGGLE_IS_LOADING
  isLoading: boolean
}
export const toggleIsLoading = (isLoading: boolean): toggleIsLoadingActionType => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

type setDescriptionActionType = {
  type: typeof SET_DESCRIPTION
  description: string
}
export const setDescription = (description: string): setDescriptionActionType => ({
  type: SET_DESCRIPTION,
  description,
});

type setImgUrlActionType = {
  type: typeof SET_IMG_URL
  imgUrl: string
}
export const setImgUrl = (imgUrl: string): setImgUrlActionType => ({ type: SET_IMG_URL, imgUrl });

export const getDetails = (movieId: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsLoading(true));
    movieAPI.movieDetails(movieId).then((data: any) => {
      dispatch(toggleIsLoading(false));
      dispatch(setTitle(data.data.movie.title_long));
      dispatch(setGenres(data.data.movie.genres));
      dispatch(setDescription(data.data.movie.description_full));
      dispatch(setImgUrl(data.data.movie.large_cover_image));
    });
  };
};

export default detailsReducer;
