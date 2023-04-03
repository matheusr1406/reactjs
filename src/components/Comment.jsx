import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment() {
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

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={styles.interactions}>
          <button>
            <ThumbsUp/>
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
