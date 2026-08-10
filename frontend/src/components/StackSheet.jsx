import LOGO_REACT from "@assets/reactjs.svg";
import LOGO_VITE from "@assets/vitejs.svg";
import LOGO_TAILWINDCSS from "@assets/tailwindcss.svg";

const StackSheet = () => {
  return (
    <div className="flex items-center justify-center gap-10 pt-10">
      <img src={LOGO_REACT} className="h-20"/>
      <img src={LOGO_VITE} className="h-20" />
      <img src={LOGO_TAILWINDCSS} className="h-20" />
    </div>
  );
}

export default StackSheet;