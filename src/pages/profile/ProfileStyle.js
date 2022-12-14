import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../asset/Theme";

export const useStyles = makeStyles((theme) => ({
  DetailsContainer: {},
  imageContainer: {
    width: "100%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "red",
    },
  },
  amount: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "24px",
    lineHeight: "29px",
    color: "#008937",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  blitCoin: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#C4850C",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  amountContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "70px",
    borderBottom: "1px solid #e9e9e9",
    // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "15px",
      flexWrap: "wrap",
    },
  },
  amountLeft: {
    width: "50%",
    display: "flex",
    paddingLeft: "80px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      width: "100%",
      paddingBottom: "10px",
      justifyContent: "space-between",
    },
  },
  amountRight: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
  },
  userInitial: {
    width: "40px",
    borderRadius: "100px",
    height: "40px",
    background: "#BA3838",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      width: "30px",
      height: "30px",
    },
  },
  userContent: {
    textAlign: "start",
    paddingLeft: "15px",
  },
  userTitle: {
    color: `${Theme.borderGray}`,
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  userNAme: {
    fontFamily: "Lato",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "19px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  propertyOverview: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "25px",
    marginBottom: "25px",
    color: `${Theme.primaryBlack}`,
  },
  propertyContainer: {
    textAlign: "start",
    marginBottom: "25px",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  leftDetails: {
    padding: "15px 25px 25px 80px",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      padding: "15px !important",
    },
  },
  mapImage: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  profiledetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  profile: {
    width: "455px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logout: {
    color: "#15BB58",
  },
  profileImg: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
  },
  detailstext: {
    fontSize: "24px",
    color: "black",
    fontWeight: "700",
    marginTop: "35px",
  },
  detailsinfo: {
    lineHeight: "17px",
    fontSize: "14px",
    color: "#888888",
  },
  detailsresp: {
    lineHeight: "21px",
    fontSize: "18px",
  },
  borndetails: {
    textAlign: "center",
  },
  monthdetails: {
    color: "white",
    backgroundColor: "#666666",
    borderRadius: "11px",
    padding: "13px 8px 11px 14px",
  },
  passwordcolor: {
    color: "#135AC3",
    marginTop: "50px",
  },
  Cardbutton: {
    color: "#029F8C",
    width: "200px",
    border: "3px solid",
    cursor: "pointer",
    height: "44px",
    fontSize: "18px",
    background: "rgba(255, 255, 255, 0.1)",
    fontFamily: "Lato",
    borderRadius: "30px",
  },
  iconTitle: {
    display: "flex",
  },
  documentsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  documentsDownload: {
    display: "flex",
    alignItems: "center",
    color: "green",
  },
  downLoadtext: {
    color: `${Theme.successGreen}`,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "40px",
    paddingRight: "10px",
  },
  amenitiesContainer: {
    textAlign: "start",
    backgroundColor: "#EEF8F8",
    padding: "38px 0px 19px 40px",
    borderRadius: "10px",
    marginBottom: "25px",
  },
  amenitiesData: {
    color: `${Theme.primaryBlack}`,
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "19px",
    fontSize: "16px",
    marginBottom: "20px",
    paddingLeft: "5px",
  },
  userpersonal: {
    display: "flex",
    alignItems: "center",
  },
  userList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  investersName: {
    color: `${Theme.primaryBlack}`,
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "19px",
    fontSize: "16px",
  },
  investersPlace: {
    color: `${Theme.secondaryGray}`,
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: "17px",
    fontSize: "14px",
  },
  investsection: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  howInvest: {
    color: `${Theme.secondaryGreen}`,
    // fontFamily: "Lato",
    fontWeight: 700,
    lineHeight: "24px",
    fontSize: "20px",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
  ivestTitle: {
    color: `${Theme.primaryBlack}`,
    fontWeight: 700,
    lineHeight: "24px",
    fontSize: "20px",
  },
  invsetLi: {
    color: `${Theme.secondaryGray}`,
    // fontFamily: "Lato",
    fontWeight: 700,
    lineHeight: "28px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  ownerContent: {
    display: "flex",
    alignItems: "center",
  },
  ownerTitle: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "40px",
    color: `${Theme.secondaryGray}`,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  investLeft: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  investBottom: {
    display: "flex",
    alignItems: "center",

    marginTop: "10px",
  },
  closeInfo: {
    fontWeight: 600,
    fontSize: "16px",
    color: `${Theme.white}`,
    borderRadius: "40px",
    background: "`${Theme.orange}`",
    padding: "5px 10px",
    marginLeft: "15px",
  },
  investBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "100px",
    marginTop: "35px",
    width: "145px",
    height: "50px",
    background: "linear-gradient(94.53deg, #34B841 18.01%, #029E8C 77.9%)",
    borderRadius: "30px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      width: "180px",
      height: "38px",
      marginLeft: "15px",
    },
  },
  InvestContent: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#444444",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  selectColor: {
    color: "#FF725E",
  },
  ownerName: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#282828",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
}));
