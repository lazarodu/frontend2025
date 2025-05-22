import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";

describe("App integration ", () => {
  it("verifica o acesso a página de admin", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "admin@exemplo.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByText(/entrar/i));

    expect(await screen.findByText(/Área Administrativa/i)).toBeInTheDocument();
  });
  it("fazer logout do admin", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "admin@exemplo.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByText(/entrar/i));

    const logoutButton = screen.getByText(/sair/i);
    fireEvent.click(logoutButton);

    expect(await screen.findByText(/login/i)).toBeInTheDocument();
  });
});
