import { Suspense } from "react";
import ProductFetch from "./ProductFetch";

function ProductMain() {
  return (
    <Suspense fallback={<div>FetchLoading...</div>}>
      <ProductFetch />
    </Suspense>
  );
}
export default ProductMain;
