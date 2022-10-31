import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/filipebteixeira98.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Filipe Teixeira</strong>
              <time title="May 12th, 09:15h" dateTime="2022-05-12 09:15:30">
                About a hour
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very good, Devon. Congrats! 👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>23</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
