import REACT_LOGO from "@assets/reactjs.svg";
import VITE_LOGO from "@assets/vitejs.svg";
import TALIWINDCSS_LOGO from "@assets/tailwindcss.svg";

const imageList = [
  REACT_LOGO, VITE_LOGO, TALIWINDCSS_LOGO
]

const Footer = () => {
  return (
    <footer className="flex pb-5 justify-center items-center">
      <p className="font-mono text-[15px] tracking-widest text-[#5C6F65]">
        Made by dev_anything_
      </p>
      <p className="font-mono text-[15px] tracking-widest text-[#5C6F65]">
        &nbsp;&nbsp;/&nbsp;&nbsp;
      </p>
      <p className="font-mono text-[15px] tracking-widest text-[#5C6F65]">
        with&nbsp;
      </p>
      {imageList.map((img) => {
        return <img key={img} className="h-5" src={img} />
      })}

    </footer>
  );
}

export default Footer;