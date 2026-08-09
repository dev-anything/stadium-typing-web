import { Link } from "react-router-dom";

const RestartBtn = ({ leagueUrl }) => {


  return (
    <div className="flex justify-center pb-10">
      <Link
        to={`/play/${leagueUrl}`}
        className="font-display leaguebtnstyle"
      >
        RESTART
      </Link>
    </div>
  );
}

export default RestartBtn;