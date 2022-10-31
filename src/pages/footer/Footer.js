import React from "react";
import Twitter from "../../asset/image/Listingpage/Twitter.svg";
import Facebook from "../../asset/image/facebook.svg";
import Linkedin from "../../asset/image/Listingpage/Linkedin.svg";
import Youtube from "../../asset/image/Listingpage/Youtube.svg";

import {
  Container,
  Wrapper,
  SocialWrapper,
  ImageWrapper,
  LowerContainer,
  LowerWrapper,
} from "./Footercss";
export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SocialWrapper>
          <ImageWrapper img={Twitter} />
          <ImageWrapper img={Facebook} />
          <ImageWrapper img={Linkedin} />
          <ImageWrapper img={Youtube} />
        </SocialWrapper>
      </Wrapper>
      <LowerContainer>
        <LowerWrapper>
          All rights reserved @ Blits estate 2020-2022
        </LowerWrapper>
      </LowerContainer>
    </Container>
  );
};
