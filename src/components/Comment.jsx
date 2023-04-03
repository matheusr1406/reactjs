import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState (0); 

  function handleLikeComment () {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://github.com/matheusr1406.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Rocha</strong>
              <time title="31 de março as 23:38" dateTime="2023-03-31">
                {" "}
                Cerca há 2h{" "}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.interactions}>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
