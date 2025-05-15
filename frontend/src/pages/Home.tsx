import { Post, type PostProps } from "../components/Post";

export function Home() {
  const posts: PostProps[] = [
    {
      id: "1",
      autor: "Lázaro",
      data: "15/05/2025",
      title: "Primeiro Post",
      description: "Post da aula",
    },
    {
      id: "2",
      autor: "Lázaro2",
      data: "15/05/2025",
      title: "Segundo Post",
      description: "Post da aula",
    },
  ];
  return <Post posts={posts} />;
}
