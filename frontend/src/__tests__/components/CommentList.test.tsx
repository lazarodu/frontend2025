import { render, screen } from "@testing-library/react";
import { CommentList } from "../../components/CommentList";
import { mockComments } from "../../mocks/CommentMock";

describe("Comment", () => {
  it("deve exibir múltiplos comments", () => {
    render(<CommentList comments={mockComments} />);
    expect(screen.getByText("Comentário sobre o Post 1.")).toBeInTheDocument();
    expect(screen.getByText("Comentário 2 sobre o Post 1.")).toBeInTheDocument();
    expect(screen.getByText("Comentário 1 sobre o Post 2.")).toBeInTheDocument();
  });
});
