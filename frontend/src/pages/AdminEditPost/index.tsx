
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { PostForm } from "../../components/PostForm"
import type { PostProps } from "../../types/PostType"
import { usePost } from "../../hooks/usePost"
import { BackButton, Container, NotFound, NotFoundMessage, NotFoundTitle, Title } from "./styles"


export const AdminEditPostPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { getPost, updatePost } = usePost()

  const [post, setPost] = useState(id ? getPost(id) : undefined)

  useEffect(() => {
    if (id) {
      setPost(getPost(id))
    }
  }, [id, getPost])

  const handleSubmit = async (postData: Omit<PostProps, "id" | "data" | "autor">) => {
    if (!id) return


    try {
      await updatePost(id, postData)
      navigate("/admin/posts")
    } catch (error) {
      console.error("Failed to update post:", error)
    }
  }

  if (!post) {
    return (
      <>
        <NotFound>
          <NotFoundTitle>Post Not Found</NotFoundTitle>
          <NotFoundMessage>The post you're trying to edit doesn't exist or has been removed.</NotFoundMessage>
          <BackButton onClick={() => navigate("/admin/posts")}>Back to Posts</BackButton>
        </NotFound>
      </>
    )
  }

  return (
    <>
      <Container>
        <Title>Edit Post</Title>
        <PostForm initialData={post} onSubmit={handleSubmit} />
      </Container>
    </>
  )
}
