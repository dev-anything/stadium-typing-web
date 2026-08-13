import useTypingStats from "@hooks/useTypingStats";
import StatusBar from "./StatusBar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "@components/game/Progress";
import Stopwatch from "@components/game/Stopwatch";
import StatDisplay from "@components/game/StatDisplay";


const buildKeyMap = () => {
  const map = {}
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i)
    map[`Key${letter}`] = letter.toLowerCase()
  }
  for (let i = 0; i < 10; i++) {
    map[`Digit${i}`] = String(i)
  }
  map.Space = ' '
  map.Minus = '-'
  map.Equal = '='
  map.BracketLeft = '['
  map.BracketRight = ']'
  map.Backslash = '\\'
  map.Semicolon = ';'
  map.Quote = "'"
  map.Comma = ','
  map.Period = '.'
  map.Slash = '/'
  map.Backquote = '`'
  return map
}

const buildShiftKeyMap = () => {
  const map = {}
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i)
    map[`Key${letter}`] = letter
  }
  const shiftNums = [')', '!', '@', '#', '$', '%', '^', '&', '*', '(']
  for (let i = 0; i < 10; i++) {
    map[`Digit${i}`] = shiftNums[i]
  }
  map.Minus = '_'
  map.Equal = '+'
  map.BracketLeft = '{'
  map.BracketRight = '}'
  map.Backslash = '|'
  map.Semicolon = ':'
  map.Quote = '"'
  map.Comma = '<'
  map.Period = '>'
  map.Slash = '?'
  map.Backquote = '~'
  return map
}

const KEY_MAP = buildKeyMap()
const SHIFT_KEY_MAP = buildShiftKeyMap()

const resolveChar = (e) => {
  const { code, shiftKey } = e
  const base = shiftKey ? SHIFT_KEY_MAP[code] : KEY_MAP[code]
  if (base === undefined) return null
  const capsLock = e.getModifierState?.('CapsLock')
  if (capsLock && /^[a-zA-Z]$/.test(base)) {
    return shiftKey ? base.toLowerCase() : base.toUpperCase()
  }
  return base
}

const TypeArea = (
    {
      stadiumName,
      onNext,
      currentStage,
      stage,
      isCountdowning,
      setMillis,
      millis,
      leagueInfo,
      //handleInput,
    }) => {
  const { handleInput, wpm, accuracy } = useTypingStats({
    target: stadiumName
  });
  const [typed, setTyped] = useState("");
  const inputRef = useRef(null);
  const lastKeyRef = useRef({ code: '', time: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    handleInput(typed);
  }, [typed, handleInput]);

  useEffect(() => {
    if (!stadiumName) return;

    setTyped('');
    inputRef.current?.focus();
  }, [stadiumName]);

  useEffect(() => {
    if (typed === stadiumName)
    {
      setTyped('');
      onNext();
      if (currentStage == stage)
      {
        navigate("/result", {
          state: {
            millis: millis,
            league: leagueInfo,
            accuracy: accuracy,
            wpm: wpm
          }
        });
      }
    }
  }, [typed, stadiumName, onNext]);

  const handleKeyDown = (e) => {
    //console.log(e);
    //console.log("typed: ", typed);
    const now = performance.now()

    if (isCountdowning)
    {
      console.log(isCountdowning);
      e.preventDefault();
      return;
    }


    if (lastKeyRef.current.code === e.code && now - lastKeyRef.current.time < 50) {
      return;
    }
    lastKeyRef.current = { code: e.code, time: now }

    if (e.code === 'Backspace') {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => prev.slice(0, -1))
      return
    }

    if (e.code === 'Enter') {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => (prev.length >= stadiumName.length ? prev : prev + '\n'))
      return
    }

    if (e.code === 'Tab') {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => (prev.length >= stadiumName.length ? prev : prev + '    '))
      return
    }

    const char = resolveChar(e)
    if (char !== null) {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => (prev.length >= stadiumName.length ? prev : prev + char))
    }
  }

  const handleCompositionStart = (e) => {
    e.preventDefault()
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-1000 flex justify-center px-4 pb-4 md:px-8 md:pb-8">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[#3CCB6F33] bg-[#0B1F17]/70 p-5 shadow-2xl backdrop-blur-md md:p-6">

        
        <StatusBar 
          progress={<Progress currentStage={currentStage} stage={stage}/>}
          stopwatch={<Stopwatch onWaiting={isCountdowning} setMillis={setMillis} millis={millis} />}
          statDisplay={<StatDisplay wpm={wpm} accuracy={accuracy}/>}
        />

        <div className="mt-4 flex justify-center">
          <div className="relative select-none font-mono leading-relaxed text-[#F4F5F0] md:text-[15px]">
            {stadiumName.split('').map((char, i) => {
              const status =
                i >= typed.length ? 'pending' : typed[i] === char ? 'correct' : 'incorrect'

              return (
                <span
                  key={i}
                  className={
                    status === 'correct'
                      ? 'text-[#3CCB6F]'
                      : status === 'incorrect'
                      ? 'bg-[#FF6B6B33] text-[#FF6B6B]'
                      : 'text-[#9CB0A6]'
                  }
                >
                  {char}
                </span>
              )
            })}

            <span
              className="absolute bottom-0 h-0.5 w-[1ch] bg-[#FFB454]"
              style={{ left: `${typed.length}ch` }}
            />
          </div>

          <input
            ref={inputRef}
            type="text"
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onBlur={(e) => e.target.focus()}
            className="absolute opacity-0 pointer-events-none inline"
            autoFocus
            lang="en"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            style={{ imeMode: 'disabled' }}
          />
        </div>
      </div>
    </div>
  )

}

export default TypeArea;