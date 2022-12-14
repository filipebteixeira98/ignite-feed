import styles from './Post.module.css'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>CTO in Rocketseat</span>
          </div>
        </div>
        <time title="May 11th, 08:15h" dateTime="2022-05-11 08:15:30">
          Posted 1 hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey, everyone! 👋</p>
        <p>
          I just deployed another project in my portfolio. It's a project I did
          at the NLW Return, Rocketseat event. The project name is DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Leave your comment" />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
