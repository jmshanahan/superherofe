import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import HerosList from "./components/HerosList";
import HeroSearch from "./components/HeroSearch";
import "./App.css";

function App() {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jshanahan.biz/2");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.dir(data);
      const transformedHeros = () => {
        return {
          id: data.id,
          name: data.name,
          response: data.response,
          powerstats:{
            strength: data.powerstats.strength,
            intelligence: data.powerstats.intelligence,
            speed: data.powerstats.speed,
            durability: data.powerstats.durability,
            power: data.powerstats.power,
            combat: data.powerstats.combat
          }
        };
      };
      console.log("test");

      let heroList = [];
      heroList.push(transformedHeros());
 
      setHeros(heroList);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);



  let content = <p>Found no movies.</p>;
  console.log(heros);
  if (heros.length > 0) {
    content = <HerosList heros={heros} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <HeroSearch/>
        {/* <button onClick={fetchMoviesHandler}>Fetch Heros</button> */}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
