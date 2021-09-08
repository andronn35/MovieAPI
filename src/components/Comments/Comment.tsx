import classes from "./Comment.module.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import cross from "../../img/cross.png";

type PropsType = {
  movieId: number
}

const Comment: React.FC<PropsType> = (props) => {

  let [comment, setComment] = useState('');  
  let [commentsList, setCommentsList] = useState(    
    JSON.parse(localStorage.getItem('commentsList') || '[]')
  );   

  useEffect(() => {
    localStorage.setItem("commentsList", JSON.stringify(commentsList))    
  }, [commentsList])

  let onCrossClick = (id: any) => {
    setCommentsList(commentsList.filter((item: any) => item.id !== id))
  };

  let showedComments = commentsList.filter((item: any) => item.commentMovieId === props.movieId)
  console.log(commentsList);  

  let commentElement = showedComments.map((item: any) => (
    <div className={classes.commentElement} key={item.id}>
      <div>{item.comment}</div>
      <div onClick={() => onCrossClick(item.id)}>
        <img src={cross} alt="cross" width="15px" height="15px" />
      </div>
    </div>
  ));

  const onAddClick = () => {
    if (comment.trim() !== '') {
      const commentItem = {
        id: uuidv4(),
        comment: comment,
        commentMovieId: props.movieId
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
