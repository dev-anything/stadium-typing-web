import Loading from "@components/common/Loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@lib/supabase";

const LeagueBtnSelector = ({ isOpen, onClose }) => {

  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchLeagues = async () => {

      try {
        const { data, err } = await supabase
          .from("leagues")
          .select("*");
        
        setLeagues(data);

        if (err) {
          throw err;
        }
      } catch (e) {

        setError(e);
        return <p>{error}</p>
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeagues();
  
  }, []);

  if (!isOpen) return null;
  if (isLoading) return <Loading />

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