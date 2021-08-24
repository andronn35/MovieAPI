import { applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import detailsReducer from "./details-reducer";
import movieReducer from "./movie-reducer";


let reducers = combineReducers({
  filmsPage: movieReducer,
  detaisPage: detailsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>





export default store;