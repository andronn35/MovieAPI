import classes from './FilmsList.module.css'
import FilmItem from './../FilmItem/FilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/movie-reducer';
import HeaderMovies from '../Header/HeaderMovies';
import Preloader from '../Preloader/Preloader';

const FilmsList = () => {

  const films = useSelector(state => state.filmsPage.films)
  const currentPage = useSelector(state => state.filmsPage.currentPage)
  const limit = useSelector(state => state.filmsPage.limit)
  const isLoading = useSelector(state => state.filmsPage.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {    
    dispatch(getMovies(limit, currentPage))
  }, [limit, currentPage, dispatch])

  return (
    <div>
      <HeaderMovies />
      {isLoading ? <Preloader /> : <div className={classes.filmsList}>
        
        {films.map(item => <FilmItem 
          key={item.id}
          id={item.id}
          filmName={item.title} 
          filmRating={item.rating} 
          filmGenres={item.genres}
          imgUrl={item.medium_cover_image} />)}
      </div>}
      
    </div>
  )
}

export default FilmsList;