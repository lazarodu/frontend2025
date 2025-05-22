import { Link } from "react-router-dom";
import { SMain } from "./styles";

export interface PostProps {
  id: string;
  title: string;
  description: string;
  autor: string;
  data: string;
}
interface PostListProps {
  posts: PostProps[];
}
export function Post({ posts }: PostListProps) {
  return (
    <SMain>
      {posts.map((post) => (
        <section key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.autor}</h5>, <h5>{post.data}</h5>
          <p>{post.description}</p>
          <Link to="/details">Ver</Link>
        </section>
      ))}
    </SMain>
  );
}
