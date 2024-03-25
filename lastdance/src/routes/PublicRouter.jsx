import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import { withCommonLayout } from "../hoc";

const Main = lazy(() => import("../pages/Main"));
const ProductMain = lazy(() => import("../pages/ProductMain"));

const WrappedMain = withCommonLayout(Main);
const WrappedProductMain = withCommonLayout(ProductMain);

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappedMain />} />
          <Route path="/product" element={<WrappedProductMain />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRouter;
