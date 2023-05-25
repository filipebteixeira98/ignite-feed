import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import styles from './Post.module.css'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Very good, Diego. Congrats! 👏'])

  const [newCommentText, setNewCommentText] = useState('')

  // const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt)
  const publishedDateFormatted = format(
    publishedAt,
    "LLLL dd 'at' hh:mm aaaa",
    { locale: enUS }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Please fill out this field!')
  }

  function handleDeleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          name="comment"
          placeholder="Leave your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={handleDeleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
