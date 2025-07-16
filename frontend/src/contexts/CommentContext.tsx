"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { CommentProps } from "../types/CommentType"
// import { mockComments } from "../mocks/CommentMock"
//import type { UserProps } from "../types/UserType"
// import { mockUsers } from "../mocks/UserMock"
import { apiComment } from "../services"

interface CommentContextType {
  comments: CommentProps[]
  isLoading: boolean
  getCommentsByPost: (post_id: string) => Promise<CommentProps[]>
  getCommentsByUser: () => Promise<CommentProps[]>
  addComment: (comment: Omit<CommentProps, "id" | "date">) => Promise<CommentProps>
  deleteComment: (id: string) => Promise<void>
}

export const CommentContext = createContext<CommentContextType>({
  comments: [],
  isLoading: true,
  getCommentsByPost: async () => [],
  getCommentsByUser: async () => [],
  addComment: async () => ({ id: "", post_id: "", user_id: "", comment: "", date: `${new Date()}` }),
  deleteComment: async () => { },
})

interface CommentProviderProps {
  children: ReactNode
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [comments, setComments] = useState<CommentProps[]>([])
  //const [users, setUsers] = useState<UserProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula chamada de API
    setTimeout(() => {
      //setComments(mockComments)
      setIsLoading(false)
      //setUsers(mockUsers)
    }, 500)
  }, [])

  const getCommentsByPost = async (post_id: string) => {
    /*
    return comments.filter((comment) => comment.post_id === post_id).map((p) => ({
      ...p,
      autor: users.filter(u => u.id === p.user_id)[0].name
    }))*/
    try {
      setIsLoading(true)
      const response = await apiComment.getByPost(post_id)
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCommentsByUser = async () => {
    // return comments.filter((comment) => comment.user_id === user_id)
    try {
      setIsLoading(true)
      const response = await apiComment.getByUser()
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const addComment = async (commentData: Omit<CommentProps, "id" | "date">) => {
    // Simula chamada de API
    /*
    return new Promise<CommentProps>((resolve) => {
      setTimeout(() => {
        const newComment: CommentProps = {
          id: `comment-${Date.now()}`,
          ...commentData,
          date: `${new Date().toLocaleDateString()}`,
        }

        setComments((prevComments) => [...prevComments, newComment])
        resolve(newComment)
      }, 500)
    })*/
    const response = await apiComment.create(commentData)
    return response.data
  }

  const deleteComment = async (id: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const commentIndex = comments.findIndex((comment) => comment.id === id)

        if (commentIndex === -1) {
          reject(new Error("Comment not found"))
          return
        }

        const updatedComments = comments.filter((comment) => comment.id !== id)
        setComments(updatedComments)
        resolve()
      }, 500)
    })
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        isLoading,
        getCommentsByPost,
        getCommentsByUser,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
