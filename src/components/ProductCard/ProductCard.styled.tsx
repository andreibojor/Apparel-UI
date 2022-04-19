import styled from "styled-components";

// export const CustomBox = styled("div")`
//   width: 300px;
//   background-color: ${(props) => (props.active ? "red" : "green")};
// `;

export const EcommerceCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
  }
`;

// ItemImage should have an a tag and then an img tag?
export const ItemImage = styled.img`
  width: 100%;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const ItemOptions = styled.div`
  display: flex;
  flex-direction: row;

  //needs media query row column
`;

const Button = styled.button`
  width: 100%;
  color: #181818;
  padding: 0.786rem 1.5rem;
  border: none;
  /* flex-grow: 1; */
  cursor: pointer;
  display: flex;
  align-items: baseline;
  justify-content: center;
  letter-spacing: inherit;

  span {
    margin-left: 7px;
  }
`;

export const ButtonWishlist = styled(Button)`
  background-color: #f6f6f6;
`;

export const ButtonCart = styled(Button)`
  color: #fff;
  background-color: #7367f0;
`;

export const ItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
`;

export const ItemName = styled.h6`
  margin-top: 0.75rem;
  font-size: 1rem;

  /* show only 1 row of the name */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescription = styled.div`
  /* show only 1 row of the description */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
