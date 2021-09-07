import classes from "./Comment.module.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import cross from "../../img/cross.png";

const Comment: React.FC = () => {

  let [comment, setComment] = useState('');  
  let [commentsList, setCommentsList] = useState(    
    JSON.parse(localStorage.getItem('commentsList') || '[]')
  );  

  useEffect(() => {
    localStorage.setItem("commentsList", JSON.stringify(commentsList))
    console.log(localStorage)    
  }, [commentsList])

  let onCrossClick = (index: number) => {
    const newCommentsArr = [...commentsList];
    newCommentsArr.splice(index, 1);
    setCommentsList(newCommentsArr);
  };

  let commentElement = commentsList.map((item: any, index: number) => (
    <div className={classes.commentElement} key={index}>
      <div>{item.comment}</div>
      <div onClick={() => onCrossClick(index)}>
        <img src={cross} alt="cross" width="15px" height="15px" />
      </div>
    </div>
  ));

  const onAddClick = () => {
    if (comment.trim() !== '') {
      const commentItem = {
        id: uuidv4(),
        comment: comment
      }
      setCommentsList((commentsList: any) => [...commentsList, commentItem])
      setComment('')
    }
  }

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
