import React, { useState } from "react";
import  classes from './HeroSearch.module.css';

const HeroSearch = (props) => {
  const [enteredHeroID, setHeroID] = useState("");

  const heroChangeHandler = (event) => {
    console.log(event.target.value);
    setHeroID(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const id = enteredHeroID;
    setHeroID("");
    props.onAddHero(id)
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label>Enter Hero ID (Number Between 1 and 731)</label>
          <input
            type="text"
            value={enteredHeroID}
            onChange={heroChangeHandler}
          />
        </div>
      </div>
      <div className={classes['new-expense__actions']}>
        <button type="submit">Add Hero</button>
      </div>
    </form>
  );
};

export default HeroSearch;
