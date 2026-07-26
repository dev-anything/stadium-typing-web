const StatDisplay = ({ wpm, accuracy }) => {
  return (
    <div>
      <span>wpm: {wpm}</span>
      <span>accuracy: {accuracy}</span>
    </div>
  );
}

export default StatDisplay;