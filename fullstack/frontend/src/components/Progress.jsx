const Progress = ({ currentStage, stage }) => {
  return (
    <span className="font-mono text-xs tabular-nums text-[#F4F5F0]">
      {currentStage}
      <span className="text-[#5C6F65]">/{stage}</span>
    </span>
  );
}

export default Progress;