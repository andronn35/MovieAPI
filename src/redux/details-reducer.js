import { movieAPI } from "../api/api";

let SET_TITLE = "SET_TITLE";
let SET_GENRES = "SET_GENRES";
let SET_DESCRIPTION = "SET_DESCRIPTION";
let SET_IMG_URL = "SET_IMG_URL";
let TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  title: "",
  genres: [],
  description: "",
  imgUrl: "",
  isLoading: false,
};

const detailsReducer = (state = initialState, action) => {
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

export const setTitle = (title) => ({ type: SET_TITLE, title });
export const setGenres = (genres) => ({ type: SET_GENRES, genres });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export const setDescription = (description) => ({
  type: SET_DESCRIPTION,
  description,
});
export const setImgUrl = (imgUrl) => ({ type: SET_IMG_URL, imgUrl });

export const getDetails = (movieId) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    movieAPI.movieDetails(movieId).then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setTitle(data.data.movie.title_long));
      dispatch(setGenres(data.data.movie.genres));
      dispatch(setDescription(data.data.movie.description_full));
      dispatch(setImgUrl(data.data.movie.large_cover_image));
    });
  };
};

export default detailsReducer;
