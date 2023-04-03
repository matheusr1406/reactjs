import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Posts.module.css";

export function Posts(props, content) {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day:'2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute:'2-digit',
  // }).format(publisehdAt)

  return (
    <article className={styles.posts}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {props.author.name}</strong>
            <span> {props.author.role} </span>
          </div>
        </div>

        <time title="31 de março as 23:38" dateTime="2023-03-31">
          {" "}
          Publicado há 1h{" "}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu Feedback!</strong>

        <textarea placeholder="Deixe um Comentario" />

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
