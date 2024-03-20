import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import ProductsList from "./components/fakestore/ProductsList";
import PublicRouter from "./routes/PublicRouter";

function App() {
  const [res, setRes] = useState();
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <ProductsList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
