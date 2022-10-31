import React from "react";
import { Grid } from "@mui/material";
import {
  Bed,
  Shower,
  Api,
  LocationCity,
  DirectionsCarFilled,
  Accessibility,
  Done,
  SaveAlt,
} from "@mui/icons-material";
import { useStyles } from "./ProfileStyle";

const Profile = () => {
  const classes = useStyles();
  return (
    // <div>Profile</div>
    // <div>contact details</div>
    <Grid container display={"flex"} flexDirection="row">
      <Grid item xs={12} lg={6} className={classes.leftDetails}>
        <div className={classes.propertyContainer}>
          <div className={classes.propertyOverview}>Property overview</div>
          <Grid container display={"flex"} flexDirection="row">
           
              <Grid item xs={6} lg={4} className={classes.propertylists}>
                <div className={classes.iconTitle}>
                  <div></div>
                  <div className={classes.bedTitle}></div>
                </div>
                <div className={classes.bedOverview}></div>
              </Grid>
         
          </Grid>
        </div>
        <div className={classes.propertyContainer}>
          <div className={classes.propertyOverview}>About property</div>
          <div className={classes.bedTitle}>
            4cents land with 1509 sqft under construction villa Thevakkal 75
            lacs located in the area of abundant in natural and unpolluted cool
            breezes , in a very desirable unpolluted location, which is close
            enough to major landmarks but far enough from the hustle and bustle
            of the city. Peaceful and calm surroundings. Easy accessibility to
            info park kakkanad, proximity to educational institutions, Hos...
          </div>
        </div>
        <div className={classes.propertyContainer}>
          <div className={classes.propertyOverview}>
            Property documents/ Legal documents
          </div>
          
            <div className={classes.documentsContainer}>
              <div className={classes.documentsDownload}>
                <Done />
                <div className={classes.bedTitle}></div>
              </div>
             
                <div className={classes.available}>Not Available</div>
                  <div className={classes.downLoadtext}>Download</div>
                  <SaveAlt />
            </div>
        
        </div>
        
       
      
        <div className={classes.propertyContainer}>
          <div className={classes.investsection}>
            <div className={classes.ivestTitle}>Why should you invest?</div>
            <div className={classes.howInvest}>How to invest?</div>
          </div>
          <ul>
            {bulletList.map((data) => (
              <li className={classes.invsetLi}>{data}</li>
            ))}
          </ul>
        </div>
        <div className={classes.propertyContainer}>
          <div className={classes.propertyOverview}>Location and nearby</div>
          <img src={Map} className={classes.mapImage} />
          <Grid container display={"flex"} flexDirection="row">
            {locationList.map((data, index) => (
              <Grid item xs={12}>
                <div className={classes.userList}>
                  <div className={classes.userpersonal}>
                    <div>{index + 1}.</div>
                    <div className={classes.userContent}>
                      <div className={classes.investersName}>{data.name}</div>
                      <div className={classes.investersPlace}>{data.place}</div>
                    </div>
                  </div>
                  <div className={classes.investersName}>{data.date}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.propertyContainer}>
          <div className={classes.propertyOverview}>About owner/ builder</div>
          <div>
            {ownerList.map((data) => (
              <div className={classes.ownerContent}>
                <div className={classes.ownerTitle}>{data.title}</div>
                <div className={classes.ownerName}>: {" " + data.name}</div>
              </div>
            ))}
          </div>
          <div className={classes.investBottom}>
            <div>Intested in buying the shares?</div>
            <div className={classes.investBtn}>button</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={6} className={classes.leftDetails}>
        <div className={classes.propertyContainer}>
          <div className={classes.investLeft}>
            <div className={classes.investsection}>Investment details</div>
            <div className={classes.closeInfo}>Closing in 2days</div>
          </div>
          <div>
            {ownerList1.map((data) => (
              <div className={classes.ownerContent}>
                <div className={classes.ownerTitle}>{data.title}</div>
                <div
                  className={`${
                    data.name === "63% Subscribed"
                      ? classes.selectColor
                      : classes.ownerName
                  }`}
                >
                  : {" " + data.name}
                </div>
              </div>
            ))}
          </div>
          <div className={classes.investBottom}>
            <div className={classes.InvestContent}>
              Intested in buying the shares?
            </div>
            <div className={classes.investBtn}>Invest on this property</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Profile;
