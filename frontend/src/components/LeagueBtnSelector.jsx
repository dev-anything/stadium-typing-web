import { Link } from "react-router-dom";

const LeagueBtnSelector = ({ isOpen, onClose, league }) => {
  //console.log(league);
  if (!isOpen) return null;

  return (
    <div className="popupstyle">
      <div className="relative">
        <button 
          className="closebtnstyle"
          onClick={() => onClose(false)}
        >
          ✕
        </button>
        <h2 className="font-display text-center text-[30px] mb-5">
          Choose the league
        </h2>
        <div className="grid grid-cols-3 gap-2.5 rounded-xl bg-[#0d2118]">
          {league.map((data) => {
            return (
              <Link
                key={data.key}
                to={`/play/${data.key}`}
                className="font-display leaguebtnstyle"
              >
                {data.label}
              </Link>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeagueBtnSelector;