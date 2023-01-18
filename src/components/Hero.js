import React from 'react';
import Statbox from './Statbox';
import Statheader from './Statheader';
import classes from './Hero.module.css';

const Hero = (props) => {
  const { name } = props;
  console.log(props);
  console.log("The name is " + name);
  return (
    <li className={classes.movie}>
      <Statheader name={name}/>

      <Statbox name="Intelligence" stat={props.intelligence}/>
      <Statbox name="Strength" stat={props.strength}/>
      <Statbox name="Speed" stat={props.speed}/>
      <Statbox name="Durability" stat={props.durability}/>
      <Statbox name="Power" stat={props.power}/>
      <Statbox name="Combat" stat={props.combat}/>
    </li>
  );
};

export default Hero;
