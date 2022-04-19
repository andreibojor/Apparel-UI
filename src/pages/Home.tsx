import React, { useContext, useState, useEffect } from "react";
import { Container } from "../styles/container";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper";
import { MwContext } from "../contexts/MwContext";
import FeatureCards from "../components/FeatureCards/FeatureCards";

type Props = {};

const Home = (props: Props) => {
  const { genderCategory } = useContext(MwContext);

  return (
    <>
      <Container fullWidth>
        <HomeSwiper gender={genderCategory} />
      </Container>
      <Container>
        <FeatureCards gender={genderCategory} />
      </Container>
      <Container>
        <img src="./images/momentimages/men/moment-image2-m.jpg" alt="asd" />
        <img src="./images/momentimages/men/moment-image1-m.jpg" alt="asd" />
      </Container>
    </>
  );
};

export default Home;
