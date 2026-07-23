import { Link } from "react-router-dom";

import icon_instagram from "@assets/icon_instagram.png";

const Header = () => {
  return (
    <header className="w-2/3 mx-auto flex items-center justify-between px-6 py-6">
      <Link
        to="/"
        className="font-display text-[25px] tracking-wide"
      >
        STADIO TYPE
      </Link>
      <a 
        href="https://www.instagram.com/dev_anything_?igsh=dmg2dWhrZXNocGt1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-8" src={icon_instagram} />
      </a>
      <span className="font-ibm-plex-mono text-[10px] tracking-widest text-[#5C6F65]">
        WORLD TOUR
      </span>
    </header>
  );
}

export default Header;