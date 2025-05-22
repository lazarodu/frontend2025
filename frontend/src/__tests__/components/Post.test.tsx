import { render, screen } from "@testing-library/react";
import { Post } from "../../components/Post";
import { MemoryRouter } from "react-router-dom";

describe("Post", () => {
  it("deve exibir múltiplos posts", () => {
    const posts = [
      {
        id: "1",
        title: "Post 1",
        description: "Descrição do Post 1",
        autor: "Lázaro",
        data: "12/05/2025",
      },
      {
        id: "2",
        title: "Post 2",
        description: "Descrição do Post 2",
        autor: "Lázaro",
        data: "12/05/2025",
      },
    ];
    render(
      <MemoryRouter>
        <Post posts={posts} />
      </MemoryRouter>
    );
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });
});
