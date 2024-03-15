import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Loading from "../components/Loading";

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default PublicRouter;
