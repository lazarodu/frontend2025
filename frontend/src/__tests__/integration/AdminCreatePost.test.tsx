/// <reference types="vitest/globals" />
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { AdminCreatePostPage } from "../../pages/AdminCreatePost"
import { usePost } from "../../hooks/usePost"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

// Mock do hook usePost
vi.mock("../../hooks/usePost")

// Mock do react-router-dom useNavigate
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn(),
}))

describe("AdminCreatePostPage", () => {
  const createPostMock = vi.fn()
  const navigateMock = vi.fn()

  beforeEach(() => {
    createPostMock.mockReset()
    navigateMock.mockReset()

      ; (usePost as vi.Mock).mockReturnValue({
        createPost: createPostMock,
      })

      ; (useNavigate as vi.Mock).mockReturnValue(navigateMock)
  })

  it("exibe mensagem de carregando quando não tem currentUser", () => {
    render(
      <AuthContext.Provider value={{ currentUser: null }}>
        <AdminCreatePostPage />
      </AuthContext.Provider>
    )
    expect(screen.getByText("Carregando...")).toBeInTheDocument()
  })

  it("chama createPost e navega após envio do formulário", async () => {
    const user = userEvent.setup()

    render(
      <AuthContext.Provider value={{ currentUser: { id: "1", name: "Admin User" } }}>
        <AdminCreatePostPage />
      </AuthContext.Provider>
    )

    // Pega o componente PostForm (supondo que ele tenha um botão submit)
    // Vamos buscar o botão pelo texto "Submit" ou similar (ajuste conforme seu PostForm)
    const submitButton = screen.getByRole("button", { name: /Publicar/i })

    // Simule o preenchimento do formulário se quiser (depende do PostForm)
    // Ou dispare diretamente o onSubmit do PostForm simulando dados:
    // Mas aqui vamos simplificar disparando clique no botão e mockando createPost para funcionar

    // Mock do createPost resolve
    createPostMock.mockResolvedValueOnce(undefined)

    await user.click(submitButton)

    // Verifique se createPost foi chamado (depende do PostForm se o onSubmit é chamado automaticamente)
    expect(createPostMock).toHaveBeenCalled()

    // Verifique se navegação ocorreu para /admin/posts
    expect(navigateMock).toHaveBeenCalledWith("/admin/posts")
  })
})
