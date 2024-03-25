import { Suspense } from "react";
import { ProductFetch, ErrorBoundary } from "../components";

function ProductMain() {
  return (
    <ErrorBoundary fallback={<div>Fetch Error...</div>}>
      <Suspense fallback={<div>Fetch Loading...</div>}>
        <ProductFetch />
      </Suspense>
    </ErrorBoundary>
  );
}
export default ProductMain;
