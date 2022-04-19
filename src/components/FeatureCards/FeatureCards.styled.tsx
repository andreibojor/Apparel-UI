import styled from "styled-components";

export const FeatureCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns === "four" ? "1fr 1fr 1fr 1fr;" : null};
  grid-template-columns: ${({ columns }) =>
    columns === "two" ? "1fr 1fr;" : null};
  grid-column-gap: 2rem;
  column-gap: 2rem;
  margin-top: 2rem;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  /* border: 1px solid black; */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
  }

  & img {
    width: 100%;
  }

  & h6 {
    text-align: center;
  }

  & p {
    text-align: center;
  }
`;
