import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { get } from "../apis/userFetcher";

function TempComponent() {
  // const tempResult = useFetch(get, "/posts");

  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      const resData = await get("/posts");
      setRes(resData);
    })();
  }, []);

  console.log(res);

  return <div>TempComponent</div>;
}

export default TempComponent;
