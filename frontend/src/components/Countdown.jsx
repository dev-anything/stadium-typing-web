const Countdown = ({ count }) => {
  return (
    <div className={
      count ? "font-display countdownstyle" : "hidden"
    }>
      {count}
    </div>
  );
}

export default Countdown;