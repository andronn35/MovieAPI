import { url } from "inspector";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import star from '../../img/star.png'
import classes from "./FilmItem.module.css";
import default_mov from '../../img/404_mov.png'

interface FilmItemProps {
  id: number          
  title: string
  rating: number
  genres: string[]
  medium_cover_image: string
}

const FilmItem: React.FC<FilmItemProps> = (props) => {
  let genres = props.genres && props.genres.map((item, index) => (
    <div key={index}>{item}</div>
  ));

  const [buttonIsHovered, setButtonIsHovered] = useState(false);

  const styles = {
    backgroundImage: `url(${props.medium_cover_image}), url(${default_mov})`,    
  };

  return (
    <div>
      <NavLink to={"/film/" + props.id}>
        <div
          className={classes.filmItem}
          style={styles}
          onMouseEnter={() => setButtonIsHovered(true)}
          onMouseLeave={() => setButtonIsHovered(false)}
        >
          {buttonIsHovered && (
            <div className={classes.details}>
              <div className={classes.rating}><img src={star} alt="star" width="15px" height="15px"/> {props.rating}</div>
              <div className={classes.genres}>{genres}</div>
            </div>
          )}
        </div>
      </NavLink>

      <div className={classes.filmName}>{props.title}</div>
    </div>
  );
};

export default FilmItem;
