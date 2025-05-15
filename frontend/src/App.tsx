import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import {RouteWeb} from "./routes"
export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteWeb />
    </BrowserRouter>
  )
}
