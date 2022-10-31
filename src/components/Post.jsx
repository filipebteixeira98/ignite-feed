import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/filipebteixeira98.png"
          />
          <div className={styles.authorInfo}>
            <strong>Filipe Teixeira</strong>
            <span>Web Developer</span>
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
          <a href="#">
            <a href="#">#newproject</a> <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </a>
        </p>
      </div>
    </article>
  )
}
