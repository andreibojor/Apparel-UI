import React, { useState } from "react";
import { Container } from "../../styles/container";
// import * as Icon from "ts-react-feather-icons";
import useFetch from "../../hooks/useFetchProduct";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  Chevron,
  Name,
  Price,
  ProductBody,
  ProductDescription,
  SwiperContainer,
  ProductInfo,
  SizeOption,
  SizeOptions,
  SizeSelect,
  ButtonWishlist,
  ButtonCart,
  ItemOptions,
} from "./ProductDetails.styled";
import ProductSwiper from "../ProductSwiper/ProductSwiper";

type Props = {
  name: string;
};

const ProductDetails = (props: Props) => {
  const [toggleSizeOptions, setToggleSizeOptions] = useState(false);

  const url = "https://asos2.p.rapidapi.com/products/v3/detail";
  const id = "9851612";
  const { data, loading, error } = useFetch(url, id);

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <Container>
      {data && (
        <ProductBody>
          <SwiperContainer>
            <ProductSwiper slides={data.media.images} />
          </SwiperContainer>

          <ProductInfo>
            <Name>{data.name}</Name>
            <Price>{data.price.current.text}</Price>
            <SizeSelect
              onClick={() => setToggleSizeOptions(!toggleSizeOptions)}
            >
              Please select size
              <Chevron active={toggleSizeOptions} />
              <SizeOptions active={toggleSizeOptions}>
                {data.variants.map((item) => (
                  <SizeOption>{item.brandSize}</SizeOption>
                ))}
              </SizeOptions>
            </SizeSelect>
            <ProductDescription>{data.description}</ProductDescription>
            <ItemOptions>
              <ButtonWishlist>
                <AiOutlineHeart size={16} />
                <span>Wishlist</span>
              </ButtonWishlist>
              <ButtonCart>
                <AiOutlineShoppingCart size={16} />
                <span>Add to Cart</span>
              </ButtonCart>
            </ItemOptions>
          </ProductInfo>
        </ProductBody>
      )}
    </Container>
  );
};

export default ProductDetails;
