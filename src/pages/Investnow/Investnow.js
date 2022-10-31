import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "./InvestNowCss";
import Commonbutton from "../../components/commonButton/Commonbutton";
export const Investnow = () => {
  const classes = useStyles();
  const Buttonstyle = {
    width: "220px",
    height: "50px",

    background: "linear-gradient(94.53deg, #204092 18.01%, #047FD8 77.9%)",
    borderRadius: "30px",
    color: "#fffff",
  };
  return (
    <div>
      <Card className={classes.Container}>
        <div className={classes.Left}>Investnow</div>
        <div className={classes.Right}></div>
        <Commonbutton btnStyle={Buttonstyle} btnName="Connect Metamask" />
      </Card>
    </div>
  );
};
