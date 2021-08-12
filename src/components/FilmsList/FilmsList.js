import classes from './FilmsList.module.css'
import FilmItem from './../FilmItem/FilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/movie-reducer';

const FilmsList = () => {

  const films = useSelector(state => state.filmsPage.films)
  const currentPage = useSelector(state => state.filmsPage.currentPage)
  const limit = useSelector(state => state.filmsPage.limit)
  const dispatch = useDispatch()

  useEffect(() => {    
    dispatch(getMovies(currentPage, limit))
  }, [currentPage, limit, dispatch])

  return (
    <div className={classes.filmsList}>
      {films.map(item => <FilmItem 
        key={item.id}
        id={item.id}
        filmName={item.title} 
        filmRating={item.rating} 
        filmGenres={item.genres}
        imgUrl={item.medium_cover_image} />)}
    </div>
  )
}

export default FilmsList;