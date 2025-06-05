import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Video-Game-Controller-Icon.svg/768px-Video-Game-Controller-Icon.svg.png"
        alt=""
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/create">Create Video Game</Link>
      </nav>
    </header>
  );
}

export default Header;
