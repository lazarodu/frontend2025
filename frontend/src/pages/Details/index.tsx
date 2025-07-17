import { useNavigate, useParams } from "react-router-dom";
import { PostDetails } from "../../components/PostDetails";
import { useEffect, useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useComment } from "../../hooks/useComment";
import { useAuth } from "../../hooks/useAuth";
import { CommentForm } from "../../components/CommentForm";
import { CommentList } from "../../components/CommentList";
import type { PostProps } from "../../types/PostType";
import type { CommentProps } from "../../types/CommentType";

export function Details() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { getPost } = usePost()
  const { comments, getCommentsByPost } = useComment()
  const { currentUser } = useAuth()

  const [post, setPost] = useState<PostProps>()
  const [postComments, setPostComments] = useState<CommentProps[]>([])

  useEffect(() => {
    if (id) {
      const loadPostComments = async () => {
        setPost(getPost(id))
        setPostComments(await getCommentsByPost(id))

      }
      loadPostComments()
    }
  }, [id, getPost, getCommentsByPost, comments])

  if (!post) {
    return (
      <>
        <h1>Post não encontrado</h1>
        <button onClick={() => navigate("/")}>Voltar para a Home</button>
      </>
    )
  }

  const handleCommentAdded = async () => {
    if (id) {
      setPostComments(await getCommentsByPost(id))
    }
  }

  return (
    <>
      <PostDetails
        title={post.title}
        description={post.description}
        content={post.content}
        autor={String(post.user?.name)}
        data={post.date}
      />
      {currentUser && <CommentForm post_id={post.id} onSubmit={handleCommentAdded} />}
      <CommentList comments={postComments} />
    </>
  );
}
