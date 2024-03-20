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

function ProductItem({ item }) {
  return (
    <div className="productsItemWrapper">
      <div key={item.id} className="productsItemWrapper">
        <ProductsHeader>{item.title}</ProductsHeader>
        <ProductsBody src={item.image}></ProductsBody>
        <ProductsFooter>{item.description}</ProductsFooter>
      </div>
    </div>
  );
}
export default ProductItem;
