import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PokemonMain = lazy(() => import("../pages/PokemonMain"));

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<PokemonMain />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PublicRouter;
