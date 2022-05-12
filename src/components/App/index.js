import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar";
import CharacterCard from "../CharacterCard";
import { getFirstEpisodesUrl } from "../helpers";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchCharacters = (targetPage = 1) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${targetPage}`;
    return axios.get(url);
  };

  const fetchEpisodes = (episodesURL) => {
    return axios.get(episodesURL);
  };

  const fetchData = (targetPage) => {
    setIsLoaded(false);

    fetchCharacters(targetPage)
      .then(({ data }) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);

        const episodesURL = getFirstEpisodesUrl(data.results);

        return fetchEpisodes(episodesURL);
      })
      .then(({ data }) => {
        setEpisodes(data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="characters-list">
        {isLoaded &&
          characters.map((character, i) => {
            return (
              <CharacterCard
                key={character.id}
                character={character}
                episodes={episodes}
              />
            );
          })}
      </div>

      <NavigationBar
        isLoaded={isLoaded}
        totalPages={totalPages}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;
