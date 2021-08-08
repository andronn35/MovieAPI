import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import movieReduser from "./movie-reduser";


let reducers = combineReducers({
  filmsPage: movieReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;