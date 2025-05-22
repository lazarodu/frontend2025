import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { AuthProvider } from "./context/AuthContext";
export function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RouteWeb />
    </AuthProvider>
  );
}
