import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title="May 12th, 09:15h" dateTime="2022-05-12 09:15:30">
                About a hour
              </time>
            </div>
            <button
              onClick={() => onDeleteComment(content)}
              title="Delete comment"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
