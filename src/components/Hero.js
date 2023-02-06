import React from "react";
// import Statbox from './Statbox';
import Statheader from "./Statheader";
import classes from "./Hero.module.css";
import StatDetails from "./StatDetails";

const Hero = (props) => {
  const { name, imageurl } = props;
  console.log(props);
  console.log("The name is " + name);
  return (
    <li className={classes.movie}>
      <Statheader name={name} imageurl={imageurl} />
      <StatDetails
        name={name}
        imageurl={imageurl}
        intelligence={props.intelligence}
        strength={props.strength}
        speed={props.speed}
        durability={props.durability}
        power={props.power}
        combat={props.combat}
      />
    </li>
  );
};

export default Hero;
