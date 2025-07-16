export interface PostProps {
  id: string;
  title: string;
  description: string;
  content: string
  user_id: string;
  date: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  };
}
export interface PostListProps {
  posts: PostProps[];
}
