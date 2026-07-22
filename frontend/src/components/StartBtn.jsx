import { Link } from "react-router-dom";

const StartBtn = ({ onClick }) => {
  //if (!isOpen) return null;


  return (
    <div className="flex justify-center pb-10">
      <button
        onClick={onClick}
        className="font-display cursor-pointer rounded-full bg-[#3CCB6F] px-7 py-2.5 text-sm font-semibold tracking-wide text-[#0B1F17] transition hover:bg-[#4fe083] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB454]"
      >
        START TYPING
      </button>
    </div>
  );
}

export default StartBtn;