import { Suspense } from "react";
import { ProductFetch } from "../components";

function ProductMain() {
  return (
    <div>
      <Suspense fallback={<div>Fetch Loading...</div>}>
        <ProductFetch />
      </Suspense>
    </div>
  );
}
export default ProductMain;
