import React from "react";
import classes from "./StatImage.module.css";
const StatImage = (props) => {
  const { imageurl, name } = props;
  return (
    <div className={classes.statimage}>
      <img
        src={imageurl}
        className={classes.imagepos}
        alt={`Image of ${{ name }}`}
      />
    </div>
  );
};

export default StatImage;
