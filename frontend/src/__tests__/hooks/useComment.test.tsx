import type React from "react"
import { renderHook } from "@testing-library/react"
import { CommentContext } from "../../contexts/CommentContext"
import { useComment } from "../../hooks/useComment"

describe("useComments Hook", () => {
  it("returns the comment context value", () => {
    const contextValue = {
      comments: [],
      isLoading: false,
      getCommentsByPost: () => [],
      getCommentsByUser: () => [],
      addComment: async () => ({ id: "", postId: "", userId: "", comment: "", data: `${new Date()}` }),
      deleteComment: async () => { },
    }

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>
    )

    const { result } = renderHook(() => useComment(), { wrapper })

    expect(result.current).toBe(contextValue)
  })

})
