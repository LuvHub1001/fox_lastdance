import { get } from "../../apis/userFetcher";
import useFetch from "../../hooks/useFetch";
import RenderComponent from "../render/RenderComponent";
import ProductItem from "./ProductItem";

function ProductFetch() {
  const productItems = useFetch(get, "/products");
  // console.log(productItems);

  return (
    <>
      {productItems && (
        <RenderComponent
          className="product-render"
          items={productItems.data || []}
          render={(item) => {
            return <ProductItem items={item} />;
          }}
        />
      )}
    </>
  );
}
export default ProductFetch;
