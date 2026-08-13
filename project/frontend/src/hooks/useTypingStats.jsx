import { useCallback, useMemo, useRef, useState } from "react";

// 한 키 입력 사이의 최대 유효 간격 (이 이상은 쉬는 시간으로 간주, 누적치에 더하지 않음)
const MAX_GAP_MS = 2000;

const useTypingStats = ({ target }) => {
  
  const [typed, setTyped] = useState('');

  // 실제 타이핑한 시간의 누적치 (키 입력 사이의 간격을 cap 해서 더해간다)
  const [activeTypingMs, setActiveTypingMs] = useState(0);
  // 마지막 키 입력 시각 — ref 로 보관 (리렌더 트리거 X)
  const lastKeystrokeRef = useRef(null);

  const [mistakeCount, setMistakeCount] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);

  

  const handleInput = useCallback((value) => {
    // 빈 문자열은 TypeArea 가 단어 변경 시 보내는 신호 — lastKeystrokeRef 는 유지하여
    // 다음 단어의 첫 키 입력에서 단어 사이 idle 시간을 MAX_GAP_MS 로 캡해서 흡수한다
    if (value === '') {
      setTyped('');
      return;
    }

    const now = Date.now();

    // 이전 키 입력과의 시간 간격을 activeTypingMs 에 합산
    // MAX_GAP_MS 초과분은 잘라내서 "쉬는 시간" 은 카운트하지 않음
    if (lastKeystrokeRef.current !== null) {
      const gap = now - lastKeystrokeRef.current;
      const capped = Math.min(gap, MAX_GAP_MS);
      setActiveTypingMs((prev) => prev + capped);
    }
    lastKeystrokeRef.current = now;

    // 앞방향 입력만 카운트 (백스페이스는 카운트하지 않음)
    if (value.length > typed.length) {
      const index = value.length - 1;
      const newChar = value[index];
      const expectedChar = target[index];

      setTotalKeystrokes((prev) => prev + 1);

      if (newChar !== expectedChar) {
        setMistakeCount((prev) => prev + 1);
      }
    }

    setTyped(value);
  }, [typed, target]);

  

  const wpm = useMemo(() => {
    if (totalKeystrokes === 0) return 0;
    if (activeTypingMs <= 0) return 0;

    const minutes = activeTypingMs / 60000;
    const words = totalKeystrokes / 5;

    return Math.round(words / minutes);

  }, [totalKeystrokes, activeTypingMs]);


  const accuracy = useMemo(() => {
    if (totalKeystrokes === 0) return 100;

    const value = ((totalKeystrokes - mistakeCount) / totalKeystrokes) * 100;
    
    return Math.round(value * 10) / 10;
  }, [totalKeystrokes, mistakeCount]);


  const reset = useCallback(() => {
    setTyped('');
    setActiveTypingMs(0);
    lastKeystrokeRef.current = null;
    setMistakeCount(0);
    setTotalKeystrokes(0);
  }, []);


  return {
    handleInput,
    wpm,
    accuracy,
    reset,
  }

}

export default useTypingStats;
