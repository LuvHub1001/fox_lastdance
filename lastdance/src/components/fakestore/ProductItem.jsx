import { useState } from "react";
import "../../App.css";
import styled from "styled-components";
import { get } from "../../apis/userFetcher";
import useFetch from "../../hooks/useFetch";

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

function ProductItem() {
  const productItems = useFetch(get, "/products");
  return (
    <div className="productsItemWrapper">
      {productItems &&
        productItems.data.map((item) => {
          return (
            <div key={item.id} className="productsItemWrapper">
              <ProductsHeader>{item.title}</ProductsHeader>
              <ProductsBody src={item.image}></ProductsBody>
              <ProductsFooter>{item.description}</ProductsFooter>
            </div>
          );
        })}
    </div>
  );
}
export default ProductItem;
