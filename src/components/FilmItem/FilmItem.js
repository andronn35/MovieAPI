
import { NavLink } from "react-router-dom";
import classes from "./FilmItem.module.css";
import box from './../../img/box.png';

const FilmItem = (props) => {  

  const styles = {       
    backgroundImage: `url(${props.imgUrl})`
  } 

  return (
    <div >
      <div className={classes.filmCard}>
        <NavLink to={'/film/' + props.id}>
          <div className={classes.filmItem} style={styles}>
            <div className={classes.detalis}>
              <div className={classes.rating} >{props.filmRating}</div>
              <div className={classes.genres}>{props.filmGenres}</div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className={classes.filmName}>
        {props.filmName}
      </div>
    </div>
  );
};

export default FilmItem;
