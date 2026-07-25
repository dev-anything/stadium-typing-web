import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const TypeArea = ({ stadiumName, onComplete, currentStage, stage, onBlocked, millis, leagueInfo, children }) => {
  const [typed, setTyped] = useState("");
  const inputRef = useRef(null);
  const lastKeyRef = useRef({ code: '', time: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (!stadiumName) return;

    setTyped('');
    inputRef.current?.focus();
  }, [stadiumName]);

  useEffect(() => {
    if (typed === stadiumName)
    {
      setTyped('');
      onComplete();
      if (currentStage == stage)
      {
        navigate("/result", {
          state: {
            millis: millis,
            league: leagueInfo
          }
        });
      }
    }
  }, [typed, stadiumName, onComplete]);

  const handleKeyDown = (e) => {
    const now = performance.now()

    if (onBlocked)
    {
      console.log(onBlocked);
      e.preventDefault();
      return;
    }


    if (lastKeyRef.current.code === e.code && now - lastKeyRef.current.time < 50) {
      return
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
    <div className="relative flex h-full w-full flex-col justify-center rounded-2xl border border-[#3CCB6F1f] bg-[#0d2118] p-6 md:w-1/2 md:p-10" onClick={() => inputRef.current?.focus()}>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onBlur={(e) => e.target.focus()}
        className="absolute opacity-0 pointer-events-none"
        autoFocus
        lang="en"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        style={{ imeMode: 'disabled' }}
        
      />
      <div className="relative font-mono text-10 leading-relaxed tracking-wide">
        <span className="whitespace-pre relative flex flex-wrap">
          {stadiumName.split('').map((char, i) => {
            const globalIdx = i;
            let className = "text-gray-500";

            if (globalIdx < typed.length)
            {
              className = typed[globalIdx] === char
                ?
                "text-white"
                :
                "text-red-500 bg-red-100"
            }
            return <span key={i} className={className}>{char}</span>
          })}
          
          {(() => {
            const cursorCol = typed.length
            if (cursorCol < 0 || cursorCol > stadiumName.length) return null

            return (
              <span
                className="absolute bottom-0 h-0.5 w-[1ch] bg-[#FFB454]"
                style={{ left: `${cursorCol}ch` }}
              />
            )
          })()}
        </span>
      </div>
      {children}
    </div>
  );
}

export default TypeArea;