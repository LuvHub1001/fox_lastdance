import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PokemonMain = lazy(() => import("../pages/PokemonMain"));
const Header = lazy(() => import("../components/headers/Header"));

function PublicRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/pokemon" element={<PokemonMain />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default PublicRouter;
