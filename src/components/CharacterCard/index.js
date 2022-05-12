import React from "react";
import { capitalizeFirstLetter, addClassForEarthLocation } from "../helpers";

import "./CharacterCard.css";

function CharacterCard({ character, episodes }) {
  const { image, episode, name, location, status, species } = character;

  const getFirstEpisodeData = () => {
    const firstEpisodeUrl = episode[0];

    return Array.isArray(episodes)
      ? episodes.find((episode) => firstEpisodeUrl.includes(episode.id))
      : episodes;
  };

  const firstEpisodeData = getFirstEpisodeData();

  return (
    <div className="character-card">
      <div className="character-image">
        <img alt="Character image" src={image} />
      </div>

      <div className="character-info">
        <h1>{name}</h1>

        <div className="main-info">
          <p className={`status-indicator ${status.toLowerCase()}`} />

          <p>{capitalizeFirstLetter(status)}</p>

          <nobr>-</nobr>

          <p>{species}</p>
        </div>

        <div className="description">
          <div>
            <p className="label">Last known location:</p>

            <p className={addClassForEarthLocation(location.name)}>
              {location.name}
            </p>
          </div>

          <div>
            <p className="label">First seen in:</p>

            {firstEpisodeData && <p>{firstEpisodeData.name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
