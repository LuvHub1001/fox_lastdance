import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components";

const ProductMain = lazy(() => import("../pages/ProductMain"));

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductMain />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRouter;
