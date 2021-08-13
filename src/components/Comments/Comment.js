import classes from "./Comment.module.css";
import { useState } from "react";
import cross from "../../img/cross.png";

const Comment = () => {
  let [commentsList, setCommentsList] = useState([]);
  let [comment, setComment] = useState("");

  let onCrossClick = (index) => {
    const newCommentsArr = [...commentsList];
    newCommentsArr.splice(index, 1);
    setCommentsList(newCommentsArr);
  };

  let commentElement = commentsList.map((item, index) => (
    <div className={classes.commentElement} key={index}>
      <div>{item}</div>
      <div onClick={() => onCrossClick(index)}>
        <img src={cross} alt="cross" width="15px" height="15px" />
      </div>
    </div>
  ));

  let onAddClick = () => {
    comment && setCommentsList([...commentsList, comment]);
    setComment("");
  };

  let onInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className={classes.comment}>
      <div>
        <h3>Comments</h3>
      </div>
      <div>{commentElement}</div>
      <div className={classes.form}>
        <input
          type="text"
          onChange={onInputChange}
          value={comment}
          placeholder="enter comment"
        />
        <button onClick={onAddClick}>add</button>
      </div>
    </div>
  );
};

export default Comment;
