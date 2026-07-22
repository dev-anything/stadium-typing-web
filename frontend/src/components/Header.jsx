import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-2/3 mx-auto flex items-center justify-between px-6 py-6">
      <Link
        to="/"
        className="font-display text-[25px] tracking-wide"
      >
        STADIO TYPE
      </Link>
      <span className="font-ibm-plex-mono text-[10px] tracking-widest text-[#5C6F65]">
        WORLD TOUR
      </span>
    </header>
  );
}

export default Header;