import { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./FilmItem.module.css";


const FilmItem = (props) => {  

  let genres = props.filmGenres.map(item => <div>{item}</div>)

  const [buttonIsHovered, setButtonIsHovered] = useState(false)

  const styles = {       
    backgroundImage: `url(${props.imgUrl})`
  } 

  return (
    <div>      
      
        <NavLink to={'/film/' + props.id}>
          <div className={classes.filmItem} style={styles}
            onMouseEnter={() => setButtonIsHovered(true)} 
            onMouseLeave={() => setButtonIsHovered(false)}
          >
            
            {buttonIsHovered && <div className={classes.details}>
              <div className={classes.rating} >{props.filmRating}</div>
              <div className={classes.genres}>{genres}</div>
            </div>}
  
            
          </div>
        </NavLink>
      
      <div className={classes.filmName}>
        {props.filmName}
      </div>
    </div>
  );
};

export default FilmItem;
