import React, { ReactNode } from "react";
import { FeatureCardsWrapper, FeatureCard } from "./FeatureCards.styled";

type Props = {
  gender: string;
  layout: string;
  data: {};
};

const FeatureCards = ({ gender, layout, data }: Props) => {
  return (
    <FeatureCardsWrapper columns={layout}>
      {data.map((item) => (
        <FeatureCard key={item.id}>
          {item.gender === gender && (
            <>
              <img src={item.image} alt={item.alt} />
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </>
          )}
        </FeatureCard>
      ))}
    </FeatureCardsWrapper>
  );
};

export default FeatureCards;
