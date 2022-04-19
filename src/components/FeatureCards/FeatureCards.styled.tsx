import styled from "styled-components";

export const FeatureCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  margin-top: 2rem;
`;

export const FeatureCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  /* border: 1px solid black; */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  /* object-fit: cover; */
  /* max-height: 280px; */
`;

export const FeatureTitle = styled.h6``;

export const FeatureSubTitle = styled.p``;
