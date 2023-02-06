import React from "react";
import Statbox from "./Statbox";

import StatImage from "./StatImage";
import classes from "./StatDetails.module.css"

const StatDetails = (props) => {
    const {name, imageurl} = props;
  return (
    <div className={classes['stat-details__controls']}>
      <div>
        <StatImage imageurl= {imageurl} name={name}/>
      </div>
      <div>
        <Statbox name="Intelligence" stat={props.intelligence} />
        <Statbox name="Strength" stat={props.strength} />
        <Statbox name="Speed" stat={props.speed} />
        <Statbox name="Durability" stat={props.durability} />
        <Statbox name="Power" stat={props.power} />
        <Statbox name="Combat" stat={props.combat} />
      </div>
    </div>
  );
};

export default StatDetails;
