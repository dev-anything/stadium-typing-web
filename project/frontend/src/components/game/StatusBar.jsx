const StatusBar = ({ progress, stopwatch, statDisplay }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {/* 진행도 — 왼쪽, 가장 눈에 띄는 자리 (지금 몇 번째인지가 맥락상 제일 중요) */}
      <div className="flex items-center gap-1.5 rounded-full bg-[#0B1F17]/60 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#3CCB6F]" />
        {progress}
      </div>

      {/* 스톱워치 + WPM + 정확도 — 오른쪽, 칩 3개 나열 */}
      <div className="flex gap-1.5">
        <div className="rounded-full bg-[#0B1F17]/60 px-3 py-1">
          {stopwatch}
        </div>
        <div className="rounded-full bg-[#0B1F17]/60 px-3 py-1">
          {statDisplay}
        </div>
      </div>
    </div>
  );
}

export default StatusBar;