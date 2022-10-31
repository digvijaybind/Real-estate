import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Percentage from "../../asset/image/Percentage.svg";
import Resort from "../../asset/image/resort.jpeg";
import Typography from "@mui/material/Typography";
import { Container, Wrapper } from "./Cardcss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconOwner from "../../asset/image/IconOwner.svg";
import { useStyles } from "./Cardcss";
const CommonCard = ({
  imagesource,
  More_Details,
  HightlightImage,
  Imagelocation,
  PercentageIcon,
  NameIcon,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.Container}>
      <div className={classes.ImageWrapper}>
        <img className={classes.PropertyImage} src={Resort} />
      </div>
      <CardContent>
        <div className={classes.ContentMangne}>
          <div className={classes.PropertyName}>Doran pool villa</div>
          <div className={classes.Location}>
            <div className={classes.LocationIcon}>
              <LocationOnIcon />
            </div>
            <div className={classes.Address}>Shetland Islands, Scotland</div>
          </div>
          <div className={classes.Price}>$365,000</div>
          <div className={classes.SubscriptionMang}>
            <div className={classes.Subscription}>Subscription status</div>
            <div className={classes.IconContent}>
              <img src={Percentage} />
              <div className={classes.PercentageContent}> 95% subscribed</div>
            </div>
          </div>
          <div className={classes.dilutionMangene}>
            <div className={classes.dilution}>dilution: </div>
            <div className={classes.dilutionContent}>700K (10%) 7M shares</div>
          </div>
          <div className={classes.OwnerMang}>
            <div className={classes.OwnerContent}> Owner/Builder</div>
            <div className={classes.IconandOwner}>
              <img className={classes.IconName} src={IconOwner} />
              <div className={classes.OwnerName}> Sherlet Johnson</div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardActions>
        <button className={classes.Cardbutton}>More Details</button>
      </CardActions>
    </Card>
  );
};

export default CommonCard;
