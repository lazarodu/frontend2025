import { Post } from "../components/Post";
import { mockPosts } from "../mocks/PostMock";

export function Home() {

  return <Post posts={mockPosts} />;
}
