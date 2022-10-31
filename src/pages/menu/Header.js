import React, { useState } from "react";
import Companylogo from "../../asset/image/Companylogo.svg";

import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Container,
  Wrapper,
  LeftMenu,
  RightMenu,
  RightMenutitle,
  LogonameWrapper,
  Logo,
  Name,
  menubarList,
  Menubartitle,
  Buytoken,
  buttontitle,
  RegButton,
} from "./Headercss";

import { useStyles } from "./Headercss";
import Commonbutton from "../../components/commonButton/Commonbutton";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    className="aboutMenu"
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const btnStyle = {
    borderRadius: "22px",
    backgroundColor: "#15BB58",
    border: "1px solid #4CE689",
    boxShadow: "0px 2px 0px rgba(19, 90, 195, 0.4)",
    fontSize: "16px",
    display: "flex",
    alignItem: "center",
    marginRight: "10px",
    padding: "12px 22px 12px 22px ",
    color: "white",
  };
  return (
    <Container>
      <Wrapper>
        <LeftMenu>
          <LogonameWrapper>
            <Logo img={Companylogo} />
            <Name> Blits Estates</Name>
          </LogonameWrapper>

          <Menubartitle className={classes.title}>Marketplace</Menubartitle>

          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            style={{
              color: "#BCCAD3",
              textTransform: "capitalize",
              marginRight: "8px",
              fontSize: "18px",
            }}
          >
            About
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              About Bills_Estate
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              What is Blits Token?
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              How to Buy Blits Token?
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Tokenomics
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              FAQ's
            </MenuItem>
          </StyledMenu>
          <Commonbutton
            btnName=" Buy Blits coins"
            bgButton="green"
            btnStyle={btnStyle}
          />

          <menubarList className={classes.List}>
            + List your property
          </menubarList>
        </LeftMenu>
        <RightMenu>
          <Button className={classes.Register}>Register</Button>
          <Button className={classes.Login}>Login</Button>
        </RightMenu>
      </Wrapper>
    </Container>
  );
};
