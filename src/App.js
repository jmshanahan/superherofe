import React, { useState } from "react";
import HerosList from "./components/HerosList";
import HeroSearch from "./components/HeroSearch";
import MainHeader from "./components/MainHeader/MainHeader";
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
        image: data.image.url,
      };

      return transformedHeros;
    } catch (error) {
      // setError(error.message);
    }
  };

  let content = <p>Found no movies.</p>;
  if (heros.length > 0) {
    content = <HerosList heros={heros} />;
  } else {
    content = <p> No heros selected</p>;
  }

  const onAddHeroHandler = async (enteredHeroID) => {
    const newHero = await fetchMoviesHandler(enteredHeroID);
    setHeros((prevState) => {
      return [...prevState, newHero];
    });
  };

  return (
    <React.Fragment>
      <section>
        <MainHeader />
      </section>
      <section>
        <HeroSearch onAddHero={onAddHeroHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
