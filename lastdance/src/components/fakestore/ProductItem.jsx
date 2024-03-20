/* eslint-disable react/prop-types */
import styled from "styled-components";

const ProductsHeader = styled.div`
  width: 500px;
  height: 100%;
  border: none;
  border-bottom: 1px solid red;
`;

const ProductsBody = styled.img`
  width: 500px;
  height: 300px;
  border-bottom: 1px solid red;
`;

const ProductsFooter = styled.div`
  width: 500px;
  border-bottom: 1px solid blue;
`;

function ProductItem({ items }) {
  return (
    <div>
      <ProductsHeader>{items.title}</ProductsHeader>
      <ProductsBody src={items.image}></ProductsBody>
      <ProductsFooter>{items.description}</ProductsFooter>
    </div>
  );
}
export default ProductItem;
