import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const CommentList = () => {
  const { comments, deleteComment } = useContext(GlobalContext);
  console.log(comments);
  return (
    <ul>
      {comments.map((comment, i) => {
        return (
          <li key={`${i}-${comment}`}>
            <div className="comment">{comment}</div>
            <DeleteForeverOutlinedIcon onClick={() => deleteComment(comment)} />
          </li>
        );
      })}
    </ul>
  );
};
