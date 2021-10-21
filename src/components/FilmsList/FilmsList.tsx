import classes from './FilmsList.module.css'
import FilmItem from '../FilmItem/FilmItem';
import { useEffect } from 'react';
import HeaderMovies from '../Header/HeaderMovies';
import Preloader from '../Preloader/Preloader';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

const FilmsList: React.FC = () => {

  const {films, currentPage, limit, isLoading} = useTypedSelector(state => state.movies)
  const {getMovies, sortByRating, sortByYear} = useActions()

  useEffect(() => {    
    (getMovies(limit, currentPage))
  }, [limit, currentPage])

  return (
    <div className={classes.filmsListContainer}>
      <HeaderMovies />
      <div className={classes.buttons}>
        <span>Sort by</span>
        <button
          onClick={() => sortByRating()}
        >
          by rating
        </button>
        <button
          onClick={() => sortByYear()}
        >
          by premiere year
        </button>
      </div>
      {isLoading ? <Preloader /> : <div className={classes.filmsList}>        
        {films.map(item => <FilmItem 
          key={item.id}
          id={item.id}
          title={item.title_long}
          rating={item.rating} 
          genres={item.genres}
          medium_cover_image={item.medium_cover_image} />)}
      </div>}      
    </div>
  )
}

export default FilmsList;