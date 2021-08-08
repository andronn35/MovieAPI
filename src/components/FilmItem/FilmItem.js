import classes from "./FilmItem.module.css";

const FilmItem = (props) => {
  return (
    <div>
      <div className={classes.filmItem}>
        <div>
          <div>{props.filmRating}</div>
          <div>{props.filmGenres}</div>
        </div>
      </div>
      <div className={classes.filmName}>{props.filmName}</div>
    </div>
  );
};

export default FilmItem;
