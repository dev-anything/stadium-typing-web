import { Link } from "react-router-dom";

const LeagueBtn = ({ league }) => {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-full bg-[#3CCB6F] px-7 py-2.5 text-sm font-semibold tracking-wide text-[#0B1F17] transition hover:bg-[#4fe083] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB454]"
      onClick={() => console.log(league.label)}
    >
      <Link to={`/play/${league.key}`}>{league.label}</Link>
    </button>
  );
}

export default LeagueBtn;