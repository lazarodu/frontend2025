/// <reference types="vitest/globals" />
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { AdminEditPostPage } from "../../pages/AdminEditPost"
import { usePost } from "../../hooks/usePost"
import { useParams, useNavigate } from "react-router-dom"

// Mock do usePost
vi.mock("../../hooks/usePost")

// Mock do react-router-dom useParams e useNavigate
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}))

// Mock do PostForm para facilitar o teste (dispara onSubmit direto)
vi.mock("../../components/PostForm", () => ({
  PostForm: ({ initialData, onSubmit }: any) => {
    return (
      <>
        <div>Form mock - title: {initialData?.title}</div>
        <button onClick={() => onSubmit({ title: "Updated Title", content: "Updated content" })}>Submit</button>
      </>
    )
  },
}))

describe("AdminEditPostPage", () => {
  const updatePostMock = vi.fn()
  const navigateMock = vi.fn()
  const getPostMock = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

      ; (usePost as vi.Mock).mockReturnValue({
        getPost: getPostMock,
        updatePost: updatePostMock,
      })

      ; (useNavigate as vi.Mock).mockReturnValue(navigateMock)
  })

  it("exibe o formulário com dados iniciais e atualiza post", async () => {
    const user = userEvent.setup()
      ; (useParams as vi.Mock).mockReturnValue({ id: "1" })

    getPostMock.mockReturnValue({
      id: "1",
      title: "My Post",
      content: "Post content",
      autor: "Admin",
      data: "2023-01-01",
    })

    updatePostMock.mockResolvedValue(undefined)

    render(<AdminEditPostPage />)

    expect(screen.getByText("Form mock - title: My Post")).toBeInTheDocument()

    await user.click(screen.getByText("Submit"))

    expect(updatePostMock).toHaveBeenCalledWith("1", { title: "Updated Title", content: "Updated content" })
    expect(navigateMock).toHaveBeenCalledWith("/admin/posts")
  })

  it("exibe mensagem de post não encontrado e navega ao clicar em Back", async () => {
    const user = userEvent.setup()
      ; (useParams as vi.Mock).mockReturnValue({ id: "2" })

    getPostMock.mockReturnValue(undefined) // Post não encontrado

    render(<AdminEditPostPage />)

    expect(screen.getByText("Post Not Found")).toBeInTheDocument()
    expect(screen.getByText("The post you're trying to edit doesn't exist or has been removed.")).toBeInTheDocument()

    await user.click(screen.getByText("Back to Posts"))

    expect(navigateMock).toHaveBeenCalledWith("/admin/posts")
  })
})
