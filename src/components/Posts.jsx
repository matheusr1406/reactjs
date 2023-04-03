import { User } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Posts.module.css";

export function Posts({ author, content }) {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day:'2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute:'2-digit',
  // }).format(publisehdAt)

  const [comments, setComments] = useState(["fera hein pai"]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment != commentToDelete;
    })    

    setComments(commentsWithoutDeletedOne);

  }

  return (
    <article className={styles.posts}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {author.name}</strong>
            <span> {author.role} </span>
          </div>
        </div>

        <time title="31 de março as 23:38" dateTime="2023-03-31">
          {" "}
          Publicado há 1h{" "}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu Feedback!</strong>

        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um Comentario"
          onChange={handleNewCommentChange}
          required
        />

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
