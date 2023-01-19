import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import HerosList from "./components/HerosList";
import HeroSearch from "./components/HeroSearch";
import "./App.css";

function App() {
  const [heros, setHeros] = useState([]);

  const fetchMoviesHandler = async (heroID) => {
    try {
      const response = await fetch(`https://jshanahan.biz/${heroID}`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.dir(data);
      const transformedHeros = {
        id: data.id,
        name: data.name,
        response: data.response,
        strength: data.powerstats.strength,
        intelligence: data.powerstats.intelligence,
        speed: data.powerstats.speed,
        durability: data.powerstats.durability,
        power: data.powerstats.power,
        combat: data.powerstats.combat,
      };
      console.log("In Fetch Movie handler");
      console.log(transformedHeros);
      return transformedHeros;
      // const transformedHeros = () => {
      //   return {
      //     id: data.id,
      //     name: data.name,
      //     response: data.response,
      //     powerstats: {
      //       strength: data.powerstats.strength,
      //       intelligence: data.powerstats.intelligence,
      //       speed: data.powerstats.speed,
      //       durability: data.powerstats.durability,
      //       power: data.powerstats.power,
      //       combat: data.powerstats.combat,
      //     },
      //   };
      // };

      // let heroList = [];
      // heroList.push(transformedHeros());

      // setHeros(heroList);
    } catch (error) {
      // setError(error.message);
    }
  };

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;
  console.log(heros);
  if (heros.length > 0) {
    console.log("hero length is greater than 0");
    content = <HerosList heros={heros} />;
  } else {
    content = <p> No heros selected</p>;
  }

  const onAddHeroHandler = async (enteredHeroID) => {
    console.log(`The entered Hero ID is ${enteredHeroID}`);
    const newHero = await fetchMoviesHandler(enteredHeroID);
    console.log("Transformed heros y");
    console.log(newHero);
    // let test = [];
    // test.push(newHero);
    // setHeros(test);
    setHeros((prevState)=>{
      return[
        ...prevState,
        newHero
      ]
    })
  };

  return (
    <React.Fragment>
      <section>
        <HeroSearch onAddHero={onAddHeroHandler} />
        {/* <button onClick={fetchMoviesHandler}>Fetch Heros</button> */}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
