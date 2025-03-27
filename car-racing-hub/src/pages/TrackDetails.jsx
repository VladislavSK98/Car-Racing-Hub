import { useParams } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";
import Comments from "../components/Comments";

const TrackDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Track Details</h2>
      <Leaderboard trackId={id} />
      <Comments trackId={id} />
    </div>
  );
};

export default TrackDetails;
