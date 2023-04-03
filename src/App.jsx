import { Posts } from "./components/Posts";
import { Header } from "./components/Header";

import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Ceo RocketSeat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    // publishedAt: new date('2023-04-01 18:21:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/matheusr1406.png",
      name: "Matheus Rocha",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    // publishedAt: new date('2023-04-09 19:21:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
            <Posts
              key={post.id}
              author={post.author}
              content={post.content}
            />)
          })}
        </main>
      </div>
    </div>
  )
}
