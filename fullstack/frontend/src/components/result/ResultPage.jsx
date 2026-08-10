import RestartBtn from "./RestartBtn";
import { useLocation } from "react-router-dom";

function formatTime(resultTime) {
  const minutes = String(Math.floor(resultTime / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((resultTime % 60000) / 1000)).padStart(2, '0');
  const milliSeconds = String(Math.floor((resultTime % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliSeconds}`
}

const ResultPage = () => {
  const location = useLocation();
  const resultTime = location.state.millis;
  const leagueUrl = location.state.league;
  const typingAccuracy = location.state.accuracy;
  const averageWpm = location.state.wpm;

  

  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 px-6 py-10">

      {/* 게임 종료 메시지 */}
      <div className="text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#3CCB6F]">
          WHISTLE BLOWN
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-wide text-[#F4F5F0] md:text-5xl">
          FULL TIME
        </h1>
      </div>
      {/* 스코어보드 통계 */}
      <div className="grid grid-cols-3 gap-6 rounded-2xl border border-[#3CCB6F1f] bg-[#0d2118]/60 px-8 py-6">
        <div className="text-center">
          <p className="font-mono text-2xl font-bold tabular-nums text-[#F4F5F0] md:text-3xl">
            {formatTime(resultTime ?? 0)}
          </p>
          <p className="font-mono mt-1 text-[10px] tracking-[0.2em] text-[#5C6F65]">
            TIME
          </p>
        </div>

        <div className="text-center">
          <p className="font-mono text-2xl font-bold tabular-nums text-[#FFB454] md:text-3xl">
            {typingAccuracy}%
          </p>
          <p className="font-mono mt-1 text-[10px] tracking-[0.2em] text-[#5C6F65]">
            ACCURACY
          </p>
        </div>

        <div className="text-center">
          <p className="font-mono text-2xl font-bold tabular-nums text-[#3CCB6F] md:text-3xl">
            {averageWpm}
          </p>
          <p className="font-mono mt-1 text-[10px] tracking-[0.2em] text-[#5C6F65]">
            WPM
          </p>
        </div>
      </div>
      <RestartBtn leagueUrl={leagueUrl} />
    </div>
  );
}

export default ResultPage;