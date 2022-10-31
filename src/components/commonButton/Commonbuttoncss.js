import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../asset/Theme";

export const useStyles = makeStyles((theme) => ({
  btnContainer: {
    border: "none",
    cursor: "pointer",
    color: "${Theme. white}",
  },
}));
