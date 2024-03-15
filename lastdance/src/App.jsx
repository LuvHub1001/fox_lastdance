import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { get } from "./apis/userFetcher";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import PublicRouter from "./routes/PublicRouter";

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
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <PublicRouter />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
