import LOGO_REACT from "@assets/logo_react.png";
import LOGO_VITE from "@assets/logo_vite.svg";
import LOGO_TAILWINDCSS from "@assets/logo_tailwindcss.svg";

const StackSheet = () => {
  return (
    <div className="flex items-center justify-center gap-10 pt-10">
      <img src={LOGO_REACT} className="h-20"/>
      <img src={LOGO_VITE} className="h-9" />
      <img src={LOGO_TAILWINDCSS} className="h-10" />
    </div>
  );
}

export default StackSheet;