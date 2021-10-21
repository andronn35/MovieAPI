import classes from "./Comment.module.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import cross from "../../img/cross.png";
import { IComment } from './../../models/IComment';

interface CommentProps {
  movieId: string
}

const Comment: React.FC<CommentProps> = (props) => {

  let [comment, setComment] = useState<IComment>({
    id: uuidv4(),
    commentValue:'',
    commentMovieId: props.movieId
  });  
  let [commentsList, setCommentsList] = useState<IComment[]>(    
    JSON.parse(localStorage.getItem('commentsList') || '[]')
  );     

  useEffect(() => {
    localStorage.setItem("commentsList", JSON.stringify(commentsList))    
  }, [commentsList])

  let onCrossClick = (id: string) => {
    setCommentsList(commentsList.filter((item) => item.id !== id))
  };

  let showedComments:IComment[] = commentsList.filter((item) => item.commentMovieId === props.movieId) 

  let commentElement = showedComments.map((item) => (
    <div className={classes.commentElement} key={item.id}>
      <div>{item.commentValue}</div>
      <div onClick={() => onCrossClick(item.id)}>
        <img src={cross} alt="cross" width="15px" height="15px" />
      </div>
    </div>
  ));

  const onAddClick = () => {
    if (comment.commentValue.trim() !== '') {
      const commentItem = {
        id: uuidv4(),
        commentValue: comment.commentValue,
        commentMovieId: props.movieId
      }
      setCommentsList((commentsList: IComment[]) => [...commentsList, commentItem])
      setComment({id: uuidv4(), commentValue:'', commentMovieId: props.movieId})
    }
  }

  let onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    comment.commentValue && setCommentsList([...commentsList, comment]);
    setComment({id: uuidv4(), commentValue:'', commentMovieId: props.movieId});
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
            onChange={e => setComment({...comment, commentValue:e.target.value})}
            value={comment.commentValue}
            placeholder="enter comment"
          />
          <button type="submit" onClick={onAddClick}>add</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
