import React from "react";
import {
  FeatureCardsWrapper,
  FeatureCard,
  FeatureSubTitle,
  FeatureTitle,
} from "./FeatureCards.styled";
import { homeimages } from "../../homeimages.json";

type Props = {
  gender: string;
  columns: string;
};

const FeatureCards = ({ gender, layout, data }) => {
  return (
    <FeatureCardsWrapper columns={layout}>
      {data.map((item) => (
        <>
          {item.gender === gender && (
            <FeatureCard key={item.id}>
              <img src={item.image} alt={item.alt} />
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </FeatureCard>
          )}
        </>
      ))}
    </FeatureCardsWrapper>
  );
};

export default FeatureCards;
