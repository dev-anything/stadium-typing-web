import RestartBtn from "@components/RestartBtn";
import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const resultTime = location.state.millis;
  const leagueUrl = location.state.league;
  const typingAccuracy = location.state.accuracy;
  const averageWpm = location.state.wpm;

  const minutes = String(Math.floor(resultTime / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((resultTime % 60000) / 1000)).padStart(2, '0');
  const milliSeconds = String(Math.floor((resultTime % 1000) / 10)).padStart(2, '0');

  return (
    <div>
      Game END...
      <Link to="/">Go to Home</Link>
      <div>{minutes}:{seconds}:{milliSeconds}</div>
      <div>{typingAccuracy}</div>
      <div>{averageWpm}</div>
      <RestartBtn leagueUrl={leagueUrl} />
    </div>
  );
}

export default ResultPage;