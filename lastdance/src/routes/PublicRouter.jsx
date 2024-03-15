import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
// import TempComponent from "../components/TempComponent";
const TempComponent = React.lazy(() => import("../components/TempComponent"));

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default PublicRouter;
