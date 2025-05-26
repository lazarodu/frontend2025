import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";

describe("Register Route", () => {
  it("deve permitir registro de usuário", async () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    );

    // Preenche os campos
    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Usuário Teste" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/^senha$/i), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByLabelText(/confirma senha/i), {
      target: { value: "123456" },
    });

    // Clica no botão de registrar
    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    // Espera ser redirecionado para a página inicial (sucesso do registro)
    expect(await screen.findByRole("heading", { name: /Post 1/i })).toBeInTheDocument();
  });

  it("deve exibir erro quando as senhas não batem", async () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    );

    // Preenche os campos
    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Usuário Teste" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/^senha$/i), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByLabelText(/confirma senha/i), {
      target: { value: "diferente" },
    });

    // Clica no botão de registrar
    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    // Deve exibir mensagem de erro
    expect(await screen.findByText(/As senhas não coincidem/i)).toBeInTheDocument();
  });
});
