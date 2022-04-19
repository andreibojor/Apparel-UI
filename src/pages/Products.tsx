import React from "react";
import ProductCards from "../components/ProductCards/ProductCards";
import { Container } from "../styles/container";

type Props = {};

function Products({}: Props) {
  return (
    <Container>
      {/* sidebar */}
      <ProductCards />
    </Container>
  );
}

export default Products;
