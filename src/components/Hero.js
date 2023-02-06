import React from "react";
import classes from "./Hero.module.css";
import StatDetails from "./StatDetails";
import StatHeaderContainer from "./StatHeaderContainer";
const Hero = (props) => {
  const { name, imageurl } = props;
  console.log(props);
  console.log("The name is " + name);
  return (
    <div className={classes.movie}>
      <StatHeaderContainer name={name} imageurl={imageurl}/>
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
    </div>
  );
};

export default Hero;
