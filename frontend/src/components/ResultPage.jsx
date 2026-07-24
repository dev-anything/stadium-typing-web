import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {

  const time = useLocation();

  console.log(time.state);

  return (
    <div>
      Game END...
      <Link to="/">Go to Home</Link>
      <div>{time.state}</div>
    </div>
  );
}

export default ResultPage;