import React, { Suspense } from "react";
import PokemonFetch from "../components/pokemon/PokemonFetch";

function PokemonMain() {
  return (
    <>
      <Suspense fallback={<div>fetchLoading...</div>}>
        <PokemonFetch />
      </Suspense>
    </>
  );
}
export default PokemonMain;
