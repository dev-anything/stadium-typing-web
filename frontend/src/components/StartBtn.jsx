import { Link } from "react-router-dom";

const StartBtn = ({ onClick }) => {
  //if (!isOpen) return null;


  return (
    <div className="flex justify-center pb-10">
      <button
        onClick={onClick}
        className="font-display startbtnstyle"
      >
        START TYPING
      </button>
    </div>
  );
}

export default StartBtn;