import { PostForm } from "../../components/PostForm";
import { useAuth } from "../../context/AuthContext";

export function Admin() {
  const { logout } = useAuth();
  function handleSubmit() {
    console.log();
  }
  return (
    <>
      <h1>Área Administrativa</h1>
      <button type="button" onClick={logout}>
        Sair
      </button>
      <PostForm onSubmit={handleSubmit} />
    </>
  );
}
