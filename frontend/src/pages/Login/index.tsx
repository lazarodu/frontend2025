import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SMain } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  function handleLogin() {
    if (login(email, password)) {
      navigate("/admin");
    } else {
      alert("Credenciais inválidas!!!");
    }
  }
  return (
    <SMain>
      <h2>Acesse</h2>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass">Senha</label>
        <input
          placeholder="Senha"
          type="password"
          name="password"
          id="pass"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleLogin}>
        Entrar
      </button>
    </SMain>
  );
}
