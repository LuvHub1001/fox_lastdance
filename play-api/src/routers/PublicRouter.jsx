import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withCommonLayout } from "../hoc";

const PokemonMain = lazy(() => import("../pages/PokemonMain"));
const Main = lazy(() => import("../pages/Main"));

const WrappedMain = withCommonLayout(Main);
const WrappedPokemonMain = withCommonLayout(PokemonMain);

function PublicRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappedMain />} />
          <Route path="/pokemon" element={<WrappedPokemonMain />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default PublicRouter;
