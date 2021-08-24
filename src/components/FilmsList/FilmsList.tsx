import classes from './FilmsList.module.css'
import FilmItem from '../FilmItem/FilmItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../../redux/movie-reducer';
import HeaderMovies from '../Header/HeaderMovies';
import Preloader from '../Preloader/Preloader';
import { AppStateType } from '../../redux/store';

const FilmsList: React.FC = () => {

  const films = useSelector((state: AppStateType) => state.filmsPage.films)
  const currentPage = useSelector((state: AppStateType) => state.filmsPage.currentPage)
  const limit = useSelector((state: AppStateType) => state.filmsPage.limit)
  const isLoading = useSelector((state: AppStateType) => state.filmsPage.isLoading)
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
          title={item.title}
          rating={item.rating} 
          genres={item.genres}
          medium_cover_image={item.medium_cover_image} />)}
      </div>}
      
    </div>
  )
}

export default FilmsList;