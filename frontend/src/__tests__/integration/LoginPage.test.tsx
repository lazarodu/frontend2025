import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";

describe("Login Route ", () => {
  it("verifica o acesso a página de admin", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "admin@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "admin123" },
    });
    fireEvent.click(screen.getByText(/entrar/i));

    expect(await screen.findByText(/Post/i)).toBeInTheDocument();
  });
  it("fazer logout do admin", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "admin@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "admin123" },
    });
    fireEvent.click(screen.getByText(/entrar/i));

    expect(await screen.findByText(/Post/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/sair/i));

    expect(await screen.findByText(/Post/i)).toBeInTheDocument()
  });
});
