import React from "react";
import { useStyles } from "./DetailsPageStyle";
import Resort from "../../asset/image/resort.jpeg";
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
import Profile1 from "../../asset/image/profile1.jpeg";
import Profile2 from "../../asset/image/profile2.jpeg";
import Resort1 from "../../asset/image/resort1.jpg";
import Resort2 from "../../asset/image/resort2.jpg";
import Resort3 from "../../asset/image/resort3.jpg";
import Map from "../../asset/image/map.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DetailsPage = () => {
  const classes = useStyles();

  const propertyList = [
    { icon: <Bed />, title: "Bed Rooms", name: "Bed Rooms" },
    { icon: <Shower />, title: "Washroom", name: "6 Bathrooms" },
    { icon: <Api />, title: "Built area", name: "3245 Sq Ft" },
    { icon: <LocationCity />, title: "Land area", name: "0.47 Acre" },
    { icon: <DirectionsCarFilled />, title: "Garage", name: "For 2 cars" },
    { icon: <Accessibility />, title: "Property type", name: "Single family" },
  ];

  const documentList = [
    { title: "Land ownership certificate", status: false },
    { title: "Building permission ", status: false },
    { title: "Tax paid recipts", status: true },
    { title: "Succession certificate", status: false },
  ];

  const amenitiesList = [
    "Sports Area",
    "Sewage Treatment Plant",
    "Landscape Garden and Tree Planting",
    "Storm Water Drains",
    "24X7 Water Supply",
    "Gymnasium",
    "Electrification(Transformer & Solar Energy)",
    "Food Court",
    "Swimming_Pool",
    "Club House",
    "Piped Gas Connection",
    "Children's play area",
    "Bar/Chill-out Lounge",
    "Tennis Court",
    "Yoga/Meditation Area",
    "Jogging Track",
    "Indoor Games",
    "24 X 7 Security",
    "Cafeteria",
    "Intercom",
    "Rain Water Harvesting",
    "Full Power Backup",
    "Library",
  ];

  const invertersList = [
    {
      img: Profile1,
      name: "Émile Germain",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile2,
      name: "Maéva Andre",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile1,
      name: "Émile Germain",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile2,
      name: "Maéva Andre",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile1,
      name: "Émile Germain",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile2,
      name: "Maéva Andre",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile1,
      name: "Émile Germain",
      place: "France",
      date: "2 Sep 2022",
    },
    {
      img: Profile2,
      name: "Maéva Andre",
      place: "France",
      date: "Today",
    },
  ];

  const locationList = [
    {
      name: "LLC dba Hillcrest Hospital South",
      place: "Hospital",
      date: "0.6 Kms",
    },
    {
      name: "Busy bees play school",
      place: "Schools",
      date: "1.2 Kms",
    },
    {
      name: "St. Joseph’s Church, Shetland Island",
      place: "Catholic Church",
      date: "2.3 Kms",
    },
    {
      name: "Wallmart retailers hub",
      place: "Hypermarket",
      date: "4.6 Kms",
    },
    {
      name: "AK terminal railway station",
      place: "Railway station",
      date: "5.1 Kms",
    },
    {
      name: "Maéva Andre",
      place: "France",
      date: "1.2 Kms",
    },
  ];

  const bulletList = [
    "Highest retun in short term ",
    "More number of shares available",
    "Big shots are already invested on this property",
  ];

  const ownerList = [
    { title: "Name of owner/ builder", name: "Sherlet Johnson" },
    { title: "Total number of properties ", name: "3 Properties" },
    { title: "Member since", name: "14 May 2021" },
  ];

  const ownerList1 = [
    { title: "Subscription Status", name: "63% Subscribed" },
    { title: "Available shares ", name: "14,562 shares" },
    { title: "Value of 1 share", name: "$20 (22 Blits coins)" },
    { title: "Total dilution", name: "700K (10%) / 7M shares" },
    { title: "Base investment", name: "$999 (25633 Blits coins)" },
    { title: "Highest possible", name: "$100K" },
  ];

  return (
    <div className={classes.DetailsContainer}>
      <div>
        <div>
          <Carousel autoPlay showThumbs={false}>
            <div>
              <img src={Resort1} className={classes.imageContainer} />
            </div>
            <div>
              <img src={Resort2} className={classes.imageContainer} />
            </div>
            <div>
              <img src={Resort3} className={classes.imageContainer} />
            </div>
          </Carousel>
        </div>
        <div className={classes.amountContainer}>
          <div className={classes.amountLeft}>
            <div className={classes.amount}>$920,600</div>
            <div className={classes.blitCoin}>~ 48.5M Blits Coins</div>
          </div>
          <div className={classes.amountRight}>
            <div className={classes.userInfo}>
              <div className={classes.userInitial}>S</div>
              <div className={classes.userContent}>
                <div className={classes.userTitle}>Owner/Builder</div>
                <div className={classes.userNAme}>Sherlet Johnson</div>
              </div>
            </div>
            <div className={classes.userInfo}>
              <div className={classes.userContent}>
                <div className={classes.userTitle}>Launched on</div>
                <div className={classes.userNAme}>1st September 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grid container display={"flex"} flexDirection="row">
        <Grid item xs={12} lg={6} className={classes.leftDetails}>
          <div className={classes.propertyContainer}>
            <div className={classes.propertyOverview}>Property overview</div>
            <Grid container display={"flex"} flexDirection="row">
              {propertyList.map((data) => (
                <Grid item xs={6} lg={4} className={classes.propertylists}>
                  <div className={classes.iconTitle}>
                    <div>{data.icon}</div>
                    <div className={classes.bedTitle}>{data.title}</div>
                  </div>
                  <div className={classes.bedOverview}>{data.name}</div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.propertyContainer}>
            <div className={classes.propertyOverview}>About property</div>
            <div className={classes.bedTitle}>
              4cents land with 1509 sqft under construction villa Thevakkal 75
              lacs located in the area of abundant in natural and unpolluted
              cool breezes , in a very desirable unpolluted location, which is
              close enough to major landmarks but far enough from the hustle and
              bustle of the city. Peaceful and calm surroundings. Easy
              accessibility to info park kakkanad, proximity to educational
              institutions, Hos...
            </div>
          </div>
          <div className={classes.propertyContainer}>
            <div className={classes.propertyOverview}>
              Property documents/ Legal documents
            </div>
            {documentList.map((item) => (
              <div className={classes.documentsContainer}>
                <div className={classes.documentsDownload}>
                  <Done />
                  <div className={classes.bedTitle}>{item.title}</div>
                </div>
                {item.status ? (
                  <div className={classes.available}>Not Available</div>
                ) : (
                  <div className={classes.documentsDownload}>
                    <div className={classes.downLoadtext}>Download</div>
                    <SaveAlt />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={classes.amenitiesContainer}>
            <div className={classes.propertyOverview}>Amenities</div>
            <Grid container display={"flex"} flexDirection="row">
              {amenitiesList.map((data) => (
                <Grid item xs={12} lg={6}>
                  <div className={classes.amenitiesData}> {data}</div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.propertyContainer}>
            <div className={classes.propertyOverview}>
              Speciality of the property
            </div>
            <div className={classes.bedTitle}>
              If any - Historical Importance / Geographical importance / vaastu
              / VIP Past owners. It means a field of importance that can be
              added by owner that will separate it from other properties and add
              value to the demand ...
            </div>
          </div>
          <div className={classes.propertyContainer}>
            <div className={classes.propertyOverview}>
              Existing investers of this property (14)
            </div>
            <Grid container display={"flex"} flexDirection="row">
              {invertersList.map((data) => (
                <Grid item xs={12}>
                  <div className={classes.userList}>
                    <div className={classes.userpersonal}>
                      <img
                        src={data.img}
                        className={classes.userInitial}
                        alt=""
                      />
                      <div className={classes.userContent}>
                        <div className={classes.investersName}>{data.name}</div>
                        <div className={classes.investersPlace}>
                          {data.place}
                        </div>
                      </div>
                    </div>
                    <div className={classes.investersName}>{data.date}</div>
                  </div>
                </Grid>
              ))}
            </Grid>
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
                        <div className={classes.investersPlace}>
                          {data.place}
                        </div>
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
    </div>
  );
};

export default DetailsPage;
