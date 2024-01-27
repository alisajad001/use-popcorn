import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

export default Navbar;
