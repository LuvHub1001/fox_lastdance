import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { get } from "./apis/userFetcher";
import ErrorBoundary from "./components/ErrorBoundary";
import TempComponent from "./components/TempComponent";
import Loading from "./components/Loading";
import PublicRouter from "./routes/PublicRouter";

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
      <PublicRouter>
        <Suspense fallback={<Loading />}>
          <TempComponent />
          <TempComponent />
          <TempComponent />
          <TempComponent />
          <TempComponent />
        </Suspense>
      </PublicRouter>
    </ErrorBoundary>
  );
}

export default App;
