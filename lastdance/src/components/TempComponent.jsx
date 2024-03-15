import useFetch from "../hooks/useFetch";
import { get } from "../apis/userFetcher";

function TempComponent() {
  const tempResult = useFetch(get, "/posts");

  console.log(tempResult);

  return <div>TempComponent</div>;
}

export default TempComponent;
