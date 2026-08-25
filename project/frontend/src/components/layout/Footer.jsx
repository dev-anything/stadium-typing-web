//import REACT_LOGO from "@assets/reactjs.svg";
//import VITE_LOGO from "@assets/vitejs.svg";
//import TALIWINDCSS_LOGO from "@assets/tailwindcss.svg";

import { supabase } from "@lib/supabase";
import { useEffect, useState } from "react";

//const imageList = [
//  REACT_LOGO, VITE_LOGO, TALIWINDCSS_LOGO
//]

const Footer = () => {
  const [logoList, setLogoList] = useState([]);
  const logoIds = ["reactjs.svg", "vitejs.svg", "tailwindcss.svg"];

  useEffect(() => {
    const fetchLogos = () => {
      const urls = logoIds.map((id) => {
        const { data } = supabase
          .storage
          .from("assets")
          .getPublicUrl(`logos/${id}`);
        
          return data.publicUrl;
      });

    setLogoList(urls);
    }

    fetchLogos();
  }, []);



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
      {logoList.map((img, idx) => {
        return <img key={idx} className="h-5" src={img} />
      })}

    </footer>
  );
}

export default Footer;