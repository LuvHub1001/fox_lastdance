import { get } from "../../apis/userFetcher";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import RenderComponent from "../render/RenderComponent";
import ProductItem from "./ProductItem";

function ProductFetch() {
  const productItems = useFetch(get, "/products");
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    place-items: center;
  `;

  return (
    <Wrapper>
      {productItems && (
        <RenderComponent
          className="product-render"
          items={productItems.data || []}
          render={(item) => {
            return <ProductItem items={item} />;
          }}
        />
      )}
    </Wrapper>
  );
}
export default ProductFetch;
