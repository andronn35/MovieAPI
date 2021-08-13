import classes from "./OneFilmPage.module.css";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./../../redux/details-reducer";
import HeaderFilm from "../Header/HeaderFilm";
import Preloader from "../Preloader/Preloader.js";
import Comment from "./../Comments/Comment";

const OneFilmPage = (props) => {
  const movieId = props.match.params.movieId;

  const title = useSelector((state) => state.detaisPage.title);
  const genres = useSelector((state) => state.detaisPage.genres);
  const description = useSelector((state) => state.detaisPage.description);
  const imgUrl = useSelector((state) => state.detaisPage.imgUrl);
  const isLoding = useSelector((state) => state.detaisPage.isLoading);
  const dispatch = useDispatch();

  let arr = genres.map((item) => "●\u00A0" + item + "\u00A0\u00A0\u00A0");

  useEffect(() => {
    dispatch(getDetails(movieId));
  }, [dispatch, movieId]);

  const styles = {
    backgroundImage: `url(${imgUrl})`,
  };

  return (
    <div>
      <HeaderFilm />
      {isLoding ? (
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
              <Comment />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default compose(withRouter(OneFilmPage));
