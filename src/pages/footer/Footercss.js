import { styled } from "@mui/material/styles";

const Container = styled("div")`
  width: auto;
  height: 140px;
  background: linear-gradient(
    254.97deg,
    #e7e8ff 4.15%,
    #b2b5ff 28.82%,
    #5f28b9 55.73%,
    #0c51a3 78.45%
  );
  @media only screen and (min-width: 480px){

  }
`;
const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 480px){

  }
`;

const SocialWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 19px 552px 85px 552px;
  @media only screen and (min-width: 480px){

  }
`;
const ImageWrapper = styled("img")`
  cursor: pointer;
  height: 36px;
  width: 36px;
  background-image: url(${(props) => props.img});
  margin-left: 40px;
  @media only screen and (min-width: 480px){

  }
`;
const LowerContainer = styled("div")`
  width: auto;
  height: 50px;
  background: linear-gradient(
    254.97deg,
    #e7e8ff 4.15%,
    #b2b5ff 28.82%,
    #5f28b9 55.73%,
    #0c51a3 78.45%
  );
  @media only screen and (min-width: 480px){

  }
`;
const LowerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  padding: 17px 584px;
  font-size: 14px;
  font-family: Roboto;
  color: #ffffff;
  @media only screen and (min-width: 480px){

  }
`;
export {
  Container,
  Wrapper,
  SocialWrapper,
  ImageWrapper,
  LowerContainer,
  LowerWrapper,
};
