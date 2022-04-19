import React from "react";
import { ProductsContainer } from "./ProductCards.styled";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../eCommerce.json";

type Props = {};

const ProductCards = (props: Props) => {
  const products = data.products.map((item) => (
    <ProductCard
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  return <ProductsContainer>{products}</ProductsContainer>;
};

export default ProductCards;
