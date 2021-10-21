import classes from "./OneFilmPage.module.css";
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useEffect } from "react";
import HeaderFilm from "../Header/HeaderFilm";
import Preloader from "../Preloader/Preloader";
import Comment from "../Comments/Comment";
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';
import default_mov from '../../img/404_mov.png'

const OneFilmPage: React.FC<RouteComponentProps> = (props) => {
  const movieId = (props.match.params as any).movieId;

  const {title, genres, description, imgUrl, isLoading} = useTypedSelector(state => state.details)
  const {getDetails} = useActions()

  let arr = genres && genres.map((item) => "●\u00A0" + item + "\u00A0\u00A0\u00A0");

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  const styles = {
    backgroundImage: `url(${imgUrl}), url(${default_mov})`,
  };

  return (
    <div>
      <HeaderFilm />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={classes.oneFilmPage}>
          <div className={classes.filmPic} style={styles}></div>
          <div className={classes.about}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>{arr}</div>
            <div>
              <h3>Synopsis</h3>
            </div>
            <div>{description}</div>
            <div>
              <Comment movieId={movieId}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default compose(withRouter(OneFilmPage));
