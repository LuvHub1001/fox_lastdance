import { useEffect, useState } from "react";
import "./App.css";
import { get } from "./apis/userFetcher";

function App() {
  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      const resData = await get("/posts");
      setRes(resData);
    })();
  }, []);

  console.log(res);

  return (
    <>
      <div>
        {res.data.map((item) => {
          return <div key={item.userId}>{item.title}</div>;
        })}
      </div>
    </>
  );
}

export default App;
