import classes from "./Comment.module.css";
import { useState } from "react";
import cross from "../../img/cross.png";

const Comment: React.FC = () => {
  let [commentsList, setCommentsList] = useState<string[]>([]);
  let [comment, setComment] = useState("");

  let onCrossClick = (index: number) => {
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

  let onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    comment && setCommentsList([...commentsList, comment]);
    setComment("");
  };

  let onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setComment((e.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.comment}>
      <div>
        <h3>Comments</h3>
      </div>
      <div>{commentElement}</div>
      <div className={classes.form}>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            onChange={onInputChange}
            value={comment}
            placeholder="enter comment"
          />
          <button type="submit" onClick={onAddClick}>add</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
