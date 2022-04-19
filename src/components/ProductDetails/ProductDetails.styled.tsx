import styled from "styled-components";

export const ProductBody = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  padding: 2rem;
`;

export const SwiperContainer = styled.div`
  width: 40%;
  margin-right: 2rem;
  /* height: 100%; */
`;

export const ProductInfo = styled.div``;

export const Name = styled.h4``;

export const Price = styled.h4``;

export const ProductDescription = styled.p``;

export const SizeSelect = styled.div`
  position: relative;
  padding: 0.5rem 0.75rem;
  border: 1px solid #181818;
  max-width: 180px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 6px; ;
`;

export const SizeOptions = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 25px rgb(34 41 47 / 10%);
  overflow: hidden;

  background-color: #fff;
  transform: translate(-13px, 30px);
  border-radius: 6px;
  display: ${(props) => (props.active ? "flex" : "none")};
`;

export const SizeOption = styled.a`
  text-decoration: none;
  padding: 0.65rem 1.28rem;

  &:hover {
    background-color: rgba(115, 103, 240, 0.12);
  }
`;

export const Chevron = styled.span`
  display: inline-block;
  width: 7px;
  height: 2px;
  padding-left: 2px;

  &:before,
  &:after {
    position: absolute;
    top: 16px;
    right: auto;
    width: 6px;
    height: 2px;
    background: #000;
    content: "";
    transition: all 0.2s ease;
  }

  &:before {
    ${(props) =>
      props.active
        ? "transform: rotate(45deg) translate(1px, -1px);"
        : "transform: rotate(45deg) translate(-1px, 1px);"}
  }

  &:after {
    ${(props) =>
      props.active
        ? "transform: rotate(-45deg) translate(-1px, -1px);"
        : "transform: rotate(-45deg) translate(1px, 1px);"}
  }

  /* .active .icon-more:before {
  transform: rotate(45deg) translate(1px, -1px);
}
.active .icon-more:after {
  transform: rotate(-45deg) translate(-1px, -1px);
} */
`;

export const ItemOptions = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  color: #181818;
  padding: 0.786rem 1.5rem;
  border: none;
  line-height: 1;
  /* flex-grow: 1; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: inherit;

  max-width: 180px;
  border-radius: 6px;
  margin-right: 2rem;

  span {
    margin-left: 7px;
  }
`;

export const ButtonWishlist = styled(Button)`
  background-color: #fff;
  border: 1px solid #181818;
  color: inherit;
`;

export const ButtonCart = styled(Button)`
  color: #fff;
  background-color: #7367f0;
`;
