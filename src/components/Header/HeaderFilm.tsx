import classes from './HeaderFilm.module.css'
import { useSelector } from 'react-redux';
import arrow from '../../img/arrow.png'
import { NavLink } from 'react-router-dom';
import { AppStateType } from '../../redux/store';

const HeaderFilm: React.FC = () => {

  let title = useSelector((state: AppStateType) => state.detaisPage.title)

  return(
    <div className={classes.header}>
      <div>{title}</div>
      <NavLink to='/'>
        <div className={classes.arrow}><img src={arrow} alt="arrow" width='50px' height='22px'/></div>
      </NavLink>
    </div>
  )
}

export default HeaderFilm
