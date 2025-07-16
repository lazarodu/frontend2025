import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { PostProvider } from "./contexts/PostContext";
import { CommentProvider } from "./contexts/CommentContext";
import { useNavigate } from "react-router-dom";
import { setupInterceptors } from "./services/http/interceptors";

export function App() {
  const navigate = useNavigate();
  setupInterceptors(() => {
    navigate("/login");
  });
  return (
    <AuthProvider>
      <GlobalStyle />
      <PostProvider>
        <CommentProvider>
          <RouteWeb />
        </CommentProvider>
      </PostProvider>
    </AuthProvider>
  );
}
