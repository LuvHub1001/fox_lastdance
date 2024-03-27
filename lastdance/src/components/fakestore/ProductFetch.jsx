import styled from "styled-components";
import { get } from "../../apis/userFetcher";
import { useFetch } from "../../hooks";
import { RenderComponent, ProductItem } from "..";

function ProductFetch() {
  const productItems = useFetch(get, "/productszxcvxzvcxzvzx");
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
