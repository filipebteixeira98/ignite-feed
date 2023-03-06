import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/filipebteixeira98.png',
      name: 'Filipe Teixeira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey, everyone! 👋' },
      {
        type: 'paragraph',
        content:
          "I just deployed another project in my portfolio. It's a project I did at the NLW Return, Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-06 09:37:54'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: "What's up, dev!? 👋" },
      {
        type: 'paragraph',
        content:
          'Come to check out new platform developed by me that is called skylab!',
      },
      { type: 'link', content: '👉 app.rocketseat.com.br' },
    ],
    publishedAt: new Date('2023-03-06 10:42:21'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
