import React, { useState } from "react";
import { useStyles } from "./Listingpagecss";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import CommonCard from "../../components/card/Card";
import { KeyboardArrowDown, SwapVert } from "@mui/icons-material";

const ITEM_HEIGHT = 18;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 1.5 + ITEM_PADDING_TOP,
      width: 50,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Listingpage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [filterType, setfilterType] = useState("Popularity");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className={classes.Container}>
      <div className={classes.FilterMang}>
        <div className={classes.SingleMange}>
          <div className={classes.FilterName}>Property type</div>
          <div>
            <FormControl
              className={classes.FormMangne}
              sx={{ m: 1, width: 237, mt: 3 }}
            >
              <Select
                multiple
                displayEmpty
                className={classes.selectInput}
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={classes.SelectFilterName}>Choose One</em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                IconComponent={() => (
                  <div className={classes.selectArrow}>
                    <KeyboardArrowDown />
                  </div>
                )}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>choose one</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.SingleMange}>
          <div className={classes.FilterName}>Price range</div>
          <div>
            <FormControl
              className={classes.FormMangne}
              sx={{ m: 1, width: 237, mt: 3 }}
            >
              <Select
                multiple
                displayEmpty
                className={classes.selectInput}
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                IconComponent={() => (
                  <div className={classes.selectArrow}>
                    <KeyboardArrowDown />
                  </div>
                )}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={classes.SelectFilterName}>Showing all</em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>choose one</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.SingleMange}>
          <div className={classes.FilterName}>Investment range</div>
          <div>
            <FormControl
              className={classes.FormMangne}
              sx={{ m: 1, width: 237, mt: 3 }}
            >
              <Select
                multiple
                displayEmpty
                className={classes.selectInput}
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                IconComponent={() => (
                  <div className={classes.selectArrow}>
                    <KeyboardArrowDown />
                  </div>
                )}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={classes.SelectFilterName}>Showing all</em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>choose one</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={classes.SingleMange}>
          <div className={classes.FilterName}>Current Investment states</div>
          <div>
            <FormControl
              className={classes.FormMangne}
              sx={{ m: 1, width: 237, mt: 3 }}
            >
              <Select
                multiple
                displayEmpty
                className={classes.selectInput}
                value={personName}
                onChange={handleChange}
                IconComponent={() => (
                  <div className={classes.selectArrow}>
                    <KeyboardArrowDown />
                  </div>
                )}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em className={classes.SelectFilterName}>
                        More than 50% available
                      </em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>choose one</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.SingleMange}>
          <div className={classes.FilterName}>Current Investment states</div>
          <div>
            <TextField
              className={classes.SelectFilterName}
              label="Search here..."
              style={{ borderRadius: "90px" }}
              // inputProps={{
              //   style: {
              //     height: "16px",
              //     marginTop: "8px",
              //   },
              // }}
              sx={{
                // '& label': { paddingLeft: (theme) => theme.spacing(2) },
                // '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                "& fieldset": {
                  // paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: "40px",
                  height: "50px",
                  width: 237,
                  marginTop: "8px",
                },
              }}
            />
          </div>
        </div>
        <Grid
        sx={{
          color:"red",
          display:"flex",
          alignItems:"center",
         justifyContent:"center",
         marginLeft:"3rem"
        }}>
        <p>Reset All</p>
        </Grid>
      </div>
      


      <div className={classes.TitleMang}>
        <div className={classes.propertyContent}>
          <div className={classes.propertyTitle}>All Properties</div>
          <div className={classes.result}>Showing 46 results</div>
        </div>
        <div className={classes.searchField}>
          <TextField
            className={classes.SelectFilterName}
            label="Search here..."
            style={{ borderRadius: "90px" }}
            // inputProps={{
            //   style: {
            //     height: "16px",
            //     marginTop: "8px",
            //   },
            // }}
            sx={{
              // '& label': { paddingLeft: (theme) => theme.spacing(2) },
              // '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
              "& fieldset": {
                // paddingLeft: (theme) => theme.spacing(2.5),
                borderRadius: "40px",
                height: "50px",
                width: 416,
                marginTop: "8px",
              },
            }}
          />
        </div>
        <div className={classes.filterList}>
          <div>
            <SwapVert />
          </div>
          <div className={classes.filterOption}>
            {["Popularity", "Price", "Relevance"].map((data) => (
              <div
                className={`${classes.filterNAme} ${
                  filterType === data && classes.selectedFilter
                }`}
                onClick={() => setfilterType(data)}
              >
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.CardMangn}>
        <div>
          <Grid
            className={classes.Gridmang}
            container
            spacing={3}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
          </Grid>
        </div>
      </div>
      <div className={classes.buttonmang}>
        <button className={classes.loadingbutton}>Load more.... </button>
      </div>
    </div>
  );
};
