import React from 'react';
import { uid } from 'uid';
import Hero from './Hero';
import classes from './HerosList.module.css';

const HeroList = (props) => {
  // const { hero} = props;
  // <ul className={classes['movies-list']}>

  return (
    <ul >
      {props.heros.map((hero) => (
        <Hero
          key={uid()} 
          name = {hero.name}
          intelligence = {hero.powerstats.intelligence}
          strength = {hero.powerstats.strength}
          speed = {hero.powerstats.speed}
          durability= {hero.powerstats.durability}
          power = {hero.powerstats.power}
          combat = {hero.powerstats.combat}
          />
      ))}
    </ul>
  );
};

export default HeroList;
