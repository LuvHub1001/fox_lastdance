import { get } from "../../apis/userFetcher";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import RenderComponent from "../render/RenderComponent";
import ProductItem from "./ProductItem";

const Wrapper = styled.div`
  & > .products-list-renderer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    place-items: center;
  }
`;

export default function ProductFetch() {
  const productItems = useFetch(get, "/products");

  return (
    <Wrapper>
      {productItems && (
        <RenderComponent
          className="products-list-renderer"
          items={productItems.data || []}
          render={(item) => {
            return <ProductItem key={item.id} item={item} />;
          }}
        />
      )}
    </Wrapper>
  );
}
