import React from "react";
import { useStyles } from "./Commonbuttoncss";
const Commonbutton = ({ btnName, btnStyle }) => {
  const classes = useStyles();
  return (
    <div>
      <button className={`${classes.btnContainer}`} style={btnStyle}>
        {btnName}
      </button>
    </div>
  );
};

export default Commonbutton;
