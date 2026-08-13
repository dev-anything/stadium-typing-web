import { Link } from "react-router-dom";

const HomeBtn = () => {


  return (
    <div className="flex justify-center pb-10">
      <Link
        to={`/`}
        className="font-display leaguebtnstyle w-25"
      >
        HOME
      </Link>
    </div>
  );
}

export default HomeBtn;