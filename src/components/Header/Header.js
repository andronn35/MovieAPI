import classes from './Header.module.css'
import Pagination from './../Pagination/Pagination';

const Header = () => {
  return (
    <div className={classes.header}>
      <div>Movies</div>
      <div><Pagination /></div>
    </div>
  )
}

export default Header;