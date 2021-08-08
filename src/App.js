import { Route } from "react-router-dom"
import FilmsList from "./components/FilmsList/FilmsList"
import Header from "./components/Header/Header";
import OneFilmPage from './components/OneFilmPage/OneFilmPage';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Route path='/' exact render={ () => <FilmsList /> } />
      <Route path='/film' render={ () => <OneFilmPage /> } />
    </div>
  )
}

export default App;