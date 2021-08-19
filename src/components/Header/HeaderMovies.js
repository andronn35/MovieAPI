import classes from './HeaderMovies.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setLimit } from '../../redux/movie-reducer';


const HeaderMovies = () => {

  const currentPage = useSelector(state => state.filmsPage.currentPage)
  const limit = useSelector(state => state.filmsPage.limit)
  const dispatch = useDispatch();  

  let pages = [];
  for (let i = 1; i <= currentPage; i++) {
    switch (currentPage) {
      case 1: pages = [i, i+1, i+2, i+3, i+4];
        break;
      case 2: pages = [i-1, i, i+1, i+2, i+3];
        break;
      default: pages = [i-2, i-1, i, i+1, i+2]
    }
    
  }

  let limitArr = [4, 8, 20]

  return (
    <div className={classes.header}>
      <div>Movies</div>
      
      <div className={classes.pagination}>
        Show by &nbsp;
        {limitArr.map((l, index) => {
          return (
            <span  className={limit === l && classes.selectedPage} 
              key={index}
              onClick={() => dispatch(setLimit(l))}
            >{" " + l}</span>
          )
        })} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {pages.map((p, index) => {
          return (
            <span className={currentPage === p && classes.selectedPage}
              key={index}              
              onClick={() => dispatch(setCurrentPage(p))}
            >
              {" " + p}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderMovies;