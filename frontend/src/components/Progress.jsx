const Progress = ({ currentStage, stage }) => {
  return (
    <div className="font-display">{`${currentStage} / ${stage}`}</div>
  );
}

export default Progress;