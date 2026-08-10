const StartBtn = ({ onClick }) => {
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