import { useCallback, useEffect, useMemo, useState } from "react";

const useTypingStats = ({ target }) => {

  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(Date.now());

  const [mistakeCount, setMistakeCount] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);

  const isComplete = typed.length > 0 && typed === target;

  const handleInput = useCallback((value) => {
    if (!startTime && value.length === 1)
    {
      setStartTime(Date.now());
    }

    if (value.length > typed.length)
    {
      const index = value.length - 1;
      const newChar = value[index];
      const expectedChar = target[index];

      setTotalKeystrokes((prev) => prev + 1);

      if (newChar !== expectedChar)
      {
        setMistakeCount((prev) => prev + 1);
      }
    }

    setTyped(value);
  }, [typed, target, startTime]);

  useEffect(() => {
    if (!startTime || isComplete) return;

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 200);

    return () => clearInterval(interval);
  }, [startTime, isComplete]);

  const wpm = useMemo(() => {
    if (!startTime || totalKeystrokes === 0) return 0;

    const elapsedMs = (isComplete ? Date.now() : now) - startTime;
    if (elapsedMs <= 0) return 0;

    const minutes = elapsedMs / 60000;
    // 분자: 현재 단어 글자수가 아닌, 세션 전체 누적 키스트로크
    const words = totalKeystrokes / 5;

    return Math.round(words / minutes);

  }, [startTime, now, totalKeystrokes, isComplete]);


  const accuracy = useMemo(() => {
    if (totalKeystrokes === 0) return 100;

    const value = ((totalKeystrokes - mistakeCount) / totalKeystrokes) * 100;
    
    return Math.round(value * 10) / 10;
  }, [totalKeystrokes, mistakeCount]);


  const reset = useCallback(() => {
    setTyped('');
    setStartTime(null);
    setNow(Date.now());
    setMistakeCount(0);
    setTotalKeystrokes(0);
  }, []);


  return {
    typed,
    handleInput,
    isComplete,
    wpm,
    accuracy,
    reset,
  }

}

export default useTypingStats;