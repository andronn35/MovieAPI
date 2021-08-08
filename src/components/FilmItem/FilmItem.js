import { NavLink } from "react-router-dom";
import classes from "./FilmItem.module.css";

const FilmItem = (props) => {
  return (
    <div>
      <NavLink to='/film'>
        <div className={classes.filmItem}>
          <div>
            <div className={classes.rating}>{props.filmRating}</div>
            <div>{props.filmGenres}</div>
          </div>
        </div>
      </NavLink>
      <div className={classes.filmName}>
        {props.filmName}
      </div>
    </div>
  );
};

export default FilmItem;
