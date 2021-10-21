import classes from './HeaderMovies.module.css'
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

const HeaderMovies: React.FC = () => {

  const {currentPage, limit} = useTypedSelector(state => state.movies)
  const {setCurrentPage, setLimit} = useActions() 

  let pages: number[] = [];
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
      <div className={classes.logo}>Movies</div>      
      <div className={classes.pagination}>
        <div>
          Show by &nbsp;
          {limitArr.map((l, index) => {
            return (
              <span className={limit === l ? classes.selectedPage : ''} 
                key={index}
                onClick={() => setLimit(l)}
              >{" " + l}</span>
            )
          })} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          {pages.map((p, index) => {
            return (
              <span className={currentPage === p ? classes.selectedPage : ''}
                key={index}              
                onClick={() => setCurrentPage(p)}
              >
                {" " + p}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderMovies;