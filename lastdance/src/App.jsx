import { useEffect, useState } from "react";
import "./App.css";
import { get } from "./apis/userFetcher";
import ErrorBoundary from "./components/ErrorBoundary";
import TempComponent from "./components/TempComponent";

function B() {
  throw new Error();
  return <div>123</div>;
}

function App() {
  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      const resData = await get("/posts");
      setRes(resData);
    })();
  }, []);

  // console.log(res);

  return (
    <ErrorBoundary>
      <TempComponent />
    </ErrorBoundary>
  );
}

export default App;
