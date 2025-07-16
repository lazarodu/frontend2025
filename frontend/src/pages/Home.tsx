import { Post } from "../components/Post";
import { usePost } from "../hooks/usePost";
//import { mockPosts } from "../mocks/PostMock";

export function Home() {
  const { posts } = usePost()

  return <Post posts={posts} />;
}
