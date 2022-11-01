import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../asset/Theme";
export const useStyles = makeStyles((theme) => ({
  Menubar: {
    top: "58px",
    left: "272px",
    padding: "5px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  Register: {
    textTransform: "captalize",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#FFFFFF !important",
      border: "1px solid #FFFFFF",
      marginRight: "5px",
      borderRadius: "22px",
      padding: "10px 18px 10px 18px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  Login: {
    textTransform: "captalize",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#FFFFFF !important",
      border: "1px solid #FFFFFF",
      padding: "10px 18px 10px 18px",
      borderRadius: "22px",
    },
    [theme.breakpoints.down("xs")]: {
   
    },
  },
  List: {
    color: "#fff",
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
   
    },
  },
  title: {
    color: "#BCCAD3",
    cursor: "pointer",
    fontSize: "22px",
  },
}));

const Container = styled("div")`
  width: auto;
  height: 80px;
  background: linear-gradient(
    254.97deg,
    #e7e8ff 4.15%,
    #b2b5ff 28.82%,
    #5f28b9 55.73%,
    #0c51a3 78.45%
  );
  display: flex;
  align-items: center;
  flexwrap: "wrap";
  @media (max-width: 480px) {
    height: 113px;
  }

`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 60px 0 60px;
  @media (max-width: 480px) {
    flexwrap: "wrap !important";
    padding: "17px 18px 0 20px !important";
    backgroundcolor: "red";
  }
  @media only screen and (min-width: 768px){

  }
`;

const LeftMenu = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (min-width: 480px){

  }
`;

const RightMenu = styled("div")`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
Button{
  background: "rgba(255, 255, 255, 0.8)",
}
  .registerBtn{
    background: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 2px 0px rgba(19, 90, 195, 0.4)",
    borderRadius: "22px",
    fontFamily: "Roboto",
    &:hover {
      background: "blue",
   }
  }
  @media only screen and (min-width: 480px){

  }
`;

const RightMenutitle = styled("div")`
  font-weight: 500;
  font-family: Roboto;
  color: #135ac3;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #ffffff;
    box-shadow: 0px 2px 0px rgba(19, 90, 195, 0.4);
    border-radius: 22px;
  }
  @media only screen and (min-width: 480px){

  }
`;

const LogonameWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 480px){

  }
`;
const Logo = styled("img")`
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-image: url(${(props) => props.img});
  margin-right: 10px;
  @media only screen and (min-width: 480px){

  }
`;
const Name = styled("div")`
  font-size: 26px;
  font-style: normal;
  font-family: Merriweather;
  cursor: pointer;
  margin-right: 30px;
  color: #ffffff;
  @media only screen and (min-width: 480px){

  }
`;

const Menubartitle = styled("div")`
  font-family: lato;
  cursor: pointer;
  font-size: 18px;
  cursor: pointer;
  margin-right: 30px;
  color: "#BCCAD3" !important;
  @media only screen and (min-width: 480px){

  }
`;
const menubarList = styled("div")`
  font-family: Roboto;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff !important;
  @media only screen and (min-width: 480px){

  }
`;
const Buytoken = styled("button")`
  width: 150px;
  height: 44px;
  background: #15bb58;
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 480px){

  }
`;
const buttontitle = styled("div")`
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
  @media only screen and (min-width: 480px){

  }
`;

export {
  Container,
  Wrapper,
  LeftMenu,
  RightMenu,
  RightMenutitle,
  LogonameWrapper,
  Logo,
  Name,
  Menubartitle,
  menubarList,
  Buytoken,
  buttontitle,
};
