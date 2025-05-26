import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { PostProvider } from "./contexts/PostContext";
import { CommentProvider } from "./contexts/CommentContext";

export function App() {
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
