import classes from './HeaderFilm.module.css'
import arrow from '../../img/arrow.png'
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from './../../hooks/useTypedSelector';

const HeaderFilm: React.FC = () => {

  const {title} = useTypedSelector(state => state.details)

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
