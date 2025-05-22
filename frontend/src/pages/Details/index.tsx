import { CommentForm } from "../../components/CommentForm";
import { CommentList, type CommentProps } from "../../components/CommentList";
import {
  PostDetails,
  type PostDetailProps,
} from "../../components/PostDetails";
import { useAuth } from "../../context/AuthContext";

export function Details() {
  const { user } = useAuth();
  const posts: PostDetailProps = {
    id: "1",
    autor: "Lázaro",
    data: "15/05/2025",
    title: "Primeiro Post",
    description: "Post da aula",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem nihil aspernatur dolorum blanditiis in minus! Quos, velit nostrum. Vero deserunt ducimus fugiat corporis eveniet blanditiis provident numquam dicta saepe.",
  };
  const comments: CommentProps[] = [
    {
      id: "1",
      autor: "José",
      data: "19/05/2025",
      comment: "Muito bom",
    },
  ];
  function handleSubmit() {
    console.log();
  }
  return (
    <>
      <PostDetails
        title={posts.title}
        description={posts.description}
        content={posts.content}
        autor={posts.autor}
        data={posts.data}
      />
      {user && <CommentForm onSubmit={handleSubmit} />}
      <CommentList comments={comments} />
    </>
  );
}
