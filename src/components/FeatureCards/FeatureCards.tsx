import React from "react";
import {
  FeatureCardsWrapper,
  FeatureCardContainer,
  FeatureImage,
  FeatureSubTitle,
  FeatureTitle,
} from "./FeatureCards.styled";

type Props = {
  gender: string;
};

const FeatureCards = (props: Props) => {
  const { gender } = props;

  return (
    <FeatureCardsWrapper>
      <FeatureCardContainer>
        <FeatureImage
          src={`./images/featureimages/${gender}/feature-image1.avif`}
        ></FeatureImage>
        <FeatureTitle>ACTIVEWEAR EDIT</FeatureTitle>
        <FeatureSubTitle>Cut out for the beach?</FeatureSubTitle>
      </FeatureCardContainer>
      <FeatureCardContainer>
        <FeatureImage
          src={`./images/featureimages/${gender}/feature-image2.avif`}
        ></FeatureImage>
        <FeatureTitle>ACTIVEWEAR EDIT</FeatureTitle>
        <FeatureSubTitle>Cut out for the beach?</FeatureSubTitle>
      </FeatureCardContainer>
      <FeatureCardContainer>
        <FeatureImage
          src={`./images/featureimages/${gender}/feature-image3.avif`}
        ></FeatureImage>
        <FeatureTitle>ACTIVEWEAR EDIT</FeatureTitle>
        <FeatureSubTitle>Cut out for the beach?</FeatureSubTitle>
      </FeatureCardContainer>
      <FeatureCardContainer>
        <FeatureImage
          src={`./images/featureimages/${gender}/feature-image4.avif`}
        ></FeatureImage>
        <FeatureTitle>ACTIVEWEAR EDIT</FeatureTitle>
        <FeatureSubTitle>Cut out for the beach?</FeatureSubTitle>
      </FeatureCardContainer>
    </FeatureCardsWrapper>
  );
};

export default FeatureCards;
