import { useEffect, useRef, useState } from "react";

import allStadiumList from "@data/main.json";
import useShuffle from "../hooks/useShuffle";

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

const TypeArea = () => {
  const { current, next, isFinished, progress } = useShuffle({ items: allStadiumList });
  //console.log("current: ", current);
  const target = current.stadium;
  console.log("This is: ", current.stadium);

  const [typed, setTyped] = useState("");
  const inputRef = useRef(null);
  const lastKeyRef = useRef({ code: '', time: 0 });

  useEffect(() => {
    setTyped('');
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    const now = performance.now()
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
      setTyped((prev) => (prev.length >= target.length ? prev : prev + '\n'))
      return
    }

    if (e.code === 'Tab') {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => (prev.length >= target.length ? prev : prev + '    '))
      return
    }

    const char = resolveChar(e)
    if (char !== null) {
      e.preventDefault()
      e.target.value = ''
      setTyped((prev) => (prev.length >= target.length ? prev : prev + char))
    }
  }

  const handleCompositionStart = (e) => {
    e.preventDefault()
  }

  return (
    <div className="p-4" onClick={() => inputRef.current?.focus()}>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        className="absolute opacity-0 pointer-events-none"
        autoFocus
        lang="en"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        style={{ imeMode: 'disabled' }}
      />
      <div className="font-ibm-plex-mono text-xs bg-gray-100 p-4 rounded w-1/2">
        {/*<span className="w-8 text-right text-gray-400 select-none">
          {current.stadium}
          {console.log("In the: ", current.stadium)}
        </span>*/}
        <span className="whitespace-pre relative flex flex-wrap">
          {target.split('').map((char, i) => {
            const globalIdx = i;
            let className = "text-gray-400";

            if (globalIdx < typed.length)
            {
              className = typed[globalIdx] === char
                ?
                "text-gray-900"
                :
                "text-red-500 bg-red-50"
            }
            return <span key={i} className={className}>{char}</span>
          })}
          {(() => {
            const cursorCol = typed.length
            if (cursorCol < 0 || cursorCol > target.length) return null
            //if (cursorAtLineEnd) return null
            return (
              <span
                className="absolute top-0 bottom-0 w-0.5 bg-blue-500 pointer-events-none"
                style={{ left: `${cursorCol}ch` }}
              />
            )
          })()}
        </span>
      </div>
      
    </div>
  );
}

export default TypeArea;