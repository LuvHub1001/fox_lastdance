import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PokemonMain = React.lazy(() => import("../pages/PokemonMain"));

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
