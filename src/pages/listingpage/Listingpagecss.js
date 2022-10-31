import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../asset/Theme";

export const useStyles = makeStyles((theme) => ({
  Container: {},
  FilterMang: {
    width: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.16)",
    padding: "15px 60px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("xs")]: {
      padding: "15px 50px",
    },
  },
  SingleMange: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  FormMangne: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #DCDCDC",
    borderRadius: "30px !important",
    marginTop: "8px !important",
    marginLeft: "0px !important",
  },
  CardMangn: {
    margin: "40px 70px 70px 68px",
    display: "flex",
    justifyContent: "space-between",
  },
  Gridmang: {
    gridGap: "7px",
  },
  FilterName: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    color: "#666666",
  },
  SelectFilterName: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#666666",
  },
  selectInput: {
    height: "50px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #DCDCDC",
    borderRadius: "30px !important",
  },
  selectArrow: {
    paddingRight: "8px",
    display: "flex",
    color: "#666666",
  },
  TitleMang: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 60px",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },
  propertyContent: {
    textAlign: "start",
  },
  propertyTitle: {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    marginBottom: "10px",
    color: `${Theme.primaryBlue}`,
  },
  result: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
  },
  filterList: {
    display: "flex",
    alignItems: "center",
    width: "20%",
  },
  filterOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  searchField: {
    width: "30%",
    textAlign: "end",
  },
  filterNAme: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    color: `${Theme.filterGray}`,
    paddingBottom: "10px",
    cursor: "pointer",
  },
  selectedFilter: {
    color: `${Theme.successGreen}`,
    borderBottom: `2px solid ${Theme.successGreen}`,
  },
  buttonmang: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  loadingbutton: {
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
    border: "none",
  },
}));
// @media only screen and (max-width: 600px) {
//   TitleMang: {
//     display: "block",
//   },
// }
