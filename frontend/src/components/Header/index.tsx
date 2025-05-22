import { FcSearch, FcVoicePresentation } from "react-icons/fc";
import { SHeader } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <SHeader>
      <FcVoicePresentation />
      <input type="checkbox" id="menu" />
      <nav>
        <label htmlFor="menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div>
          <form action="" method="post">
            <FcSearch />
            <input type="text" name="search" placeholder="Busca" />
          </form>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </SHeader>
  );
}
