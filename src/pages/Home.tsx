import React, { useContext, useState, useEffect } from "react";
import { Container } from "../styles/container";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper";
import { MwContext } from "../contexts/MwContext";
import FeatureCards from "../components/FeatureCards/FeatureCards";
import homeimages from "../homeimages.json";

type Props = {
  // genderCategory: string;
};

const Home = (props: Props) => {
  const { genderCategory } = useContext(MwContext);

  return (
    <>
      <Container fullWidth>
        <HomeSwiper gender={genderCategory} />
      </Container>
      <Container>
        <FeatureCards
          gender={genderCategory}
          layout="four"
          data={homeimages.featureimages}
        />
      </Container>
      <Container>
        <FeatureCards
          gender={genderCategory}
          layout="two"
          data={homeimages.momentimages}
        />
      </Container>
    </>
  );
};

export default Home;
