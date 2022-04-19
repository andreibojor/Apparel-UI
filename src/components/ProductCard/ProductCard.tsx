import React from "react";
// import * as Icon from "ts-react-feather-icons";
import {
  ButtonCart,
  ButtonWishlist,
  CardBody,
  EcommerceCard,
  ItemImage,
  ItemPrice,
  ItemName,
  ItemDescription,
  ItemOptions,
} from "./ProductCard.styled";

interface Props {
  image: string;
  price: number;
  name: string;
  description: string;
}

const ProductCard = ({ name, image, price, description }: Props) => {
  return (
    <>
      <EcommerceCard>
        <ItemImage src={image} />
        <CardBody>
          <ItemPrice>${price}</ItemPrice>
          <ItemName>{name}</ItemName>
          <ItemDescription>{description}</ItemDescription>
        </CardBody>
        <ItemOptions>
          <ButtonWishlist>
            {/* <Icon.Heart size={14} /> */}
            <span>Wishlist</span>
          </ButtonWishlist>
          <ButtonCart>
            {/* <Icon.ShoppingCart size={14} /> */}
            <span>Add to Cart</span>
          </ButtonCart>
        </ItemOptions>
      </EcommerceCard>
    </>
  );
};

export default ProductCard;
