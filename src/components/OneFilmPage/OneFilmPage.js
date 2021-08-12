import classes from './OneFilmPage.module.css'
import titanic from './../../img/Titanic.png'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetails } from './../../redux/details-reducer';

const OneFilmPage = (props) => {
  

const movieId = props.match.params.movieId;

const title = useSelector(state => state.detaisPage.title)
const genres = useSelector(state => state.detaisPage.genres)
const description = useSelector(state => state.detaisPage.description)
const imgUrl = useSelector(state => state.detaisPage.imgUrl)
const dispatch = useDispatch()

useEffect(() => {    
  dispatch(getDetails(movieId))
}, [dispatch, movieId])
  
  return (
    <div className={classes.oneFilmPage}>
      <div className={classes.filmPic}>
        <img src={titanic} alt='titanic'/>
      </div>
      <div className={classes.about}>
        <div><h2>{title}</h2></div>
        <div>{genres.toString()}</div>
        <div><h3>Synopsis</h3></div>
        <div>{description}
        </div>
      </div>
    </div>
  )
}

export default compose(withRouter(OneFilmPage));