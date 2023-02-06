import React from "react";
import Statheader from "./Statheader";
import StatImage from "./StatImage";
import classes from "./StatHeaderContainer.module.css";

const StatHeaderContainer = (props) => {
  return (
    <div className={classes["stat-headers__controls"]}>
      <StatImage imageurl={props.imageurl} name={props.name} />
      <Statheader name={props.name} />
    </div>
  );
};

export default StatHeaderContainer;
