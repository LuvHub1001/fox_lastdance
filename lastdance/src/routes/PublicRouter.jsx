import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
const TempComponent = React.lazy(() => import("../components/TempComponent"));
const ProductMain = React.lazy(() => import("../pages/ProductMain"));

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempComponent />} />
          <Route path="/products" element={<ProductMain />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default PublicRouter;
