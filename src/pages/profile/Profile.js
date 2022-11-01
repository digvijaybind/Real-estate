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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Resort3 from "../../asset/image/resort3.jpg";
import { useStyles } from "./ProfileStyle";

const Profile = () => {
  const classes = useStyles();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    // <div>Profile</div>
    // <div>contact details</div>

    <Grid container display={"flex"} flexDirection="column">
      <Grid container display={"flex"} flexDirection="row">
        <Grid item xs={12} lg={6} className={classes.leftDetails}>
          <div className={classes.propertyContainer}>
            <div className={classes.profiledetails}>
              <div className={classes.propertyOverview}>My profile</div>
              <div className={classes.logout}>Logout</div>
            </div>
            <div className={classes.profile}>
              <img src={Resort3} alt="Avatar" className={classes.profileImg} />
              <div className={classes.borndetails}>
                <p className={classes.detailstext}>Binse Abraham</p>
                <p>Bangalore, India</p>
              </div>
              <div className={classes.monthdetails}> 1992 Born Male</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.leftDetails}>
          <div>
            <div className={classes.profiledetails}>
              <div className={classes.detailstext}>Contact Details</div>
              <div className={classes.investBtn}>Edit profile</div>
            </div>
            <div>
              <p className={classes.detailsinfo}>Email address</p>
              <p className={classes.detailsresp}>binseva@gmail.com</p>
            </div>
            <div>
              <p className={classes.detailsinfo}>Mobile number</p>
              <p className={classes.detailsresp}>+91 987654321</p>
            </div>

            <div>
              <div className={classes.detailstext}>Account Details</div>
            </div>
            <div>
              <p className={classes.detailsinfo}>Acccount created on</p>
              <p className={classes.detailsresp}>
                15 March 2022 - 7 months back{" "}
              </p>
            </div>
            <div>
              <p className={classes.detailsinfo}>Total Listing</p>
              <p className={classes.detailsresp}>2 properties </p>
            </div>
            <div>
              <p className={classes.detailsinfo}>Share holding</p>
              <p className={classes.detailsresp}>58 sharess/ 6 properties</p>
            </div>
            <div>
              <p className={classes.detailsinfo}>current token balance</p>
              <p className={classes.detailsresp}>1578 coins</p>
            </div>
            <div>
              <p className={classes.detailsinfo}>Connected wallet</p>
              <p className={classes.detailsresp}>Metamask - 0xE38bsF</p>
            </div>
          </div>
          <div>
            <p className={classes.passwordcolor}>
              Keep changing your password for added security
            </p>
            <button className={classes.Cardbutton}>Change Password</button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
