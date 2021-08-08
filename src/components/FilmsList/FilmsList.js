import classes from './FilmsList.module.css'
import FilmItem from './../FilmItem/FilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/movie-reduser';

const FilmsList = () => {

  const films = useSelector(state => state.filmsPage.films)
  const currentPage = useSelector(state => state.filmsPage.currentPage)
  const pageSize = useSelector(state => state.filmsPage.pageSize)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies(currentPage, pageSize))
  }, [])

  return (
    <div className={classes.filmsList}>
      {films.map(item => <FilmItem 
        key={item.id}
        filmName={item.title} 
        filmRating={item.rating} 
        filmGenres={item.genres}/>)}
    </div>
  )
}

export default FilmsList;