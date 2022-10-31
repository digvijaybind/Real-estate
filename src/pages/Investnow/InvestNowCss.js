import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Container: {
    padding: "90px",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    "&:hover": {
      boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
    },
  },
}));
