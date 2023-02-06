import React from 'react';
import { uid } from 'uid';
import Hero from './Hero';
// import classes from './HerosList.module.css';

const HeroList = (props) => {
  // const { hero} = props;
  // <ul className={classes['movies-list']}>

  return (
    <div >
      {props.heros.map((hero) => (
        <Hero
          key={uid()} 
          name = {hero.name}
          imageurl={hero.image}
          intelligence = {hero.intelligence}
          strength = {hero.strength}
          speed = {hero.speed}
          durability= {hero.durability}
          power = {hero.power}
          combat = {hero.combat}
          />
      ))}
    </div>
  );
};

export default HeroList;
