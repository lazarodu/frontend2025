import type { PostProps } from "../../components/Post";
import { PostDetails } from "../../components/PostDetails";

export function Details() {
  const posts: PostProps = {
    id: "1",
    autor: "Lázaro",
    data: "15/05/2025",
    title: "Primeiro Post",
    description: "Post da aula",
  };
  return (
    <PostDetails
      title={posts.title}
      description={posts.description}
      autor={posts.autor}
      data={posts.data}
    />
  );
}
