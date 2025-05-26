import { render, screen } from "@testing-library/react";
import { Post } from "../../components/Post";
import { MemoryRouter } from "react-router-dom";
import { mockPosts } from "../../mocks/PostMock";

describe("Post", () => {
  it("deve exibir múltiplos posts", () => {
    render(
      <MemoryRouter>
        <Post posts={mockPosts} />
      </MemoryRouter>
    );
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });
});
