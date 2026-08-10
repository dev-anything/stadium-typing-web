import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "@components/common/Loading";

const LeagueBtnSelector = ({ isOpen, onClose }) => {
  
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    
    const API_URL = import.meta.env.VITE_API_URL;
    //console.log(API_URL);

    fetch(`${API_URL}/api/league`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch URL");
      }
      return res.json();
      })
      .then((data) => setLeagues(data))
      .catch((err) => setError(err.message))
      .finally(() => {setIsLoading(false)})
  }, []);
  
  if (!isOpen) return null;
  if (isLoading) return <Loading />;



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
          {leagues.map((league) => {
            return (
              <Link
                key={league.id}
                to={`/play/${league.league_code}`}
                className="font-display leaguebtnstyle text-center"
              >
                {league.league_name}
              </Link>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeagueBtnSelector;