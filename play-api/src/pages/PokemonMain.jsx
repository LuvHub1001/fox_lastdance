import { Suspense } from "react";
import { ErrorBoundary, PokemonFetch } from "../components";

function PokemonMain() {
  return (
    <ErrorBoundary fallback={<div>Fetch Error...</div>}>
      <Suspense fallback={<div>fetchLoading...</div>}>
        <PokemonFetch />
      </Suspense>
    </ErrorBoundary>
  );
}
export default PokemonMain;
