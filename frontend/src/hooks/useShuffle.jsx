import { useCallback, useMemo, useState } from "react";
import shuffleJson from "@utils/shuffleJson";

const useShuffle = ({ items }) => {
  const shuffled = useMemo(() => shuffleJson(items), [items]);

  const [index, setIndex] = useState(0);

  const current = shuffled[index];
  const isFinished = index >= shuffled.length;

  const next = useCallback(() => {
    setIndex(prev => prev + 1);
  }, []);
  
  const reset = useCallback(() => {
    setIndex(0);
  }, []);
  
  //return { current, next, reset, isFinished, progress: `${index + 1} / ${shuffled.length}` };
  return { current, next, reset, isFinished, currentStage: index + 1, stage: shuffled.length };
}

export default useShuffle;