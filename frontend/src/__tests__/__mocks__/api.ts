export const mockPosts = [
  {
    id: "1",
    title: "Post 1",
    description: "Descrição do Post 1",
    content: "Conteúdo do Post 1",
    autor: "Lázaro",
    data: "12/05/2025",
  },
  {
    id: "2",
    title: "Post 2",
    description: "Descrição do Post 2",
    content: "Conteúdo do Post 2",
    autor: "Lázaro",
    data: "12/05/2025",
  },
];

export const fetchPosts = vi.fn(() => Promise.resolve(mockPosts));
export const fetchPostsById = vi.fn((id: string) =>
  Promise.resolve(mockPosts.find((p) => p.id === id))
);
export interface createPostProps {
  title: string;
  description: string;
  content: string;
}
export const createPost = vi.fn((data: createPostProps) => {});
