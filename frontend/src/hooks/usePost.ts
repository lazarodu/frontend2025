"use client"

import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"

export const usePost = () => {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error("usePost must be used within an PostProvider")
  }

  return context
}
