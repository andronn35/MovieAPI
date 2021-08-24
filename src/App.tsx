import { Route, BrowserRouter , Switch } from "react-router-dom"
import FilmsList from "./components/FilmsList/FilmsList"
import OneFilmPage from './components/OneFilmPage/OneFilmPage';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.app}>      
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={ () => <FilmsList /> } />
          <Route path='/film/:movieId?' render={ (props) => <OneFilmPage {...props}/> } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;