import allStadiums from "@data/main.json";
import useShuffle from "../hooks/useShuffle";

const Test = () => {
  const { current, next, isFinished, progress } = useShuffle({ items: allStadiums });

  if (isFinished) return <p>Shuffle Done !</p>;

  return (
    <div>
      <p>{progress}</p>
      {/*<TypingInput
        targetText={current.name}
        onComplete={next}
      />*/}
    </div>
  );
}

export default Test;