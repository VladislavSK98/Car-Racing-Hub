import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return <h1>Details Page for Item {id}</h1>;
}

export default Details;
