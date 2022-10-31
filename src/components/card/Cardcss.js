import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../asset/Theme";

export const useStyles = makeStyles((theme) => ({
  Container: {
    cursor: "pointer",
    transition: "all .25s linear",
    width: "308px",
    // height: "30%",
    padding: "14px",
    boxShadow: "0px 1px 8px rgb(0 0 0 / 14%) !important",
    borderRadius: "30px !important",
    marginRight: "14px",
  },
  ImageWrapper: {
    // height: "60px",
  },
  ContentMangne: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  Location: {
    display: "flex",
    justifyContent: "space-between",
    color: `${Theme.gray}`,
    alignItems: "center",
    margin: "10px 0px",
  },
  LocationIcon: {
    "&: svg": {
      fontSize: "16px",
    },
  },
  Address: {
    fontFamily: "Lato",
    fontSize: "16px",
  },
  Subscription: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#444444",
  },
  dilutionMangene: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "8px 0px 8px 0px",
  },
  dilution: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
  },
  dilutionContent: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
  },
  SubscriptionMang: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "8px 0px 8px 0px",
  },
  IconContent: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  dilution: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
  },
  OwnerMang: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "8px 0px 43px 0px",
  },
  IconandOwner: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  PropertyName: {
    fontFamily: "Merriweather",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
  },
  IconName: {
    width: "28px",
    height: "28px",
  },
  OwnerName: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    marginLeft: "10px",
  },
  PropertyImage: {
    width: "272px",
    // height: "272px",
    border: "4px solid rgba(255, 255, 255, 0.8)",
    borderRadius: "20px",
  },
  dilutionContent: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
  },
  OwnerContent: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#444444",
  },
  PercentageContent: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    marginLeft: "10px",
  },
  Price: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    color: "#008937",
  },
  Cardbutton: {
    width: "146px",
    height: "44px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
    color: "#029F8C",
    cursor: "pointer",
    fontFamily: "Lato",
    fontSize: "18px",
    border: "3px solid",
    borderImageSource:
      "linear - gradient(98.23deg, #BCEEC1 16.6%, #5ABCB0 83.62%)",

    "&:hover": {
      background: "linear-gradient(99.02deg, #69B670 15.66%, #0C786B 78.72%)",
      color: `${Theme.white}`,
    },
  },
  Loadbutton: {
    width: "146px",
    height: "44px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
    color: "#029F8C",
    cursor: "pointer",
    fontFamily: "Lato",
    fontSize: "18px",
    background: "linear-gradient(99.02deg, #69B670 15.66%, #0C786B 78.72%)",
    color: `${Theme.white}`,
  },
}));
