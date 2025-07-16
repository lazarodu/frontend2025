import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentForm } from "../../components/CommentForm";

vi.mock("../../hooks/useComment", () => ({
  useComment: () => ({
    addComment: vi.fn().mockResolvedValueOnce(undefined),
  }),
}));

vi.mock("../../hooks/useAuth", () => ({
  useAuth: () => ({
    currentUser: {
      id: "user-1",
      name: "Usuário Teste",
    },
  }),
}));

describe("CommentForm", () => {
  it("deve exibir o comentário", async () => {
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();
    render(<CommentForm post_id="post-1" onSubmit={onSubmitMock} />);
    expect(screen.queryByPlaceholderText(/Escreva um comentário.../i)).toBeInTheDocument()
    const commentInput = screen.getByLabelText("Comentário");
    const submit = screen.getByRole("button", { name: "Enviar" });
    await user.type(commentInput, "Comentário teste");
    await user.click(submit);
    expect(onSubmitMock).toHaveBeenCalledWith({ comment: "Comentário teste" });
  });
});
