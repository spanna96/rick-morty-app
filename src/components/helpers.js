export const getFirstEpisodesUrl = (characters) => {
  const baseUrl = "https://rickandmortyapi.com/api/episode/";

  const episodesIds = new Set(
    characters.map((character) => character.episode[0].substr(baseUrl.length))
  );

  const episodesString = [...episodesIds].join(",");

  return baseUrl + episodesString;
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const addClassForEarthLocation = (location) => {
  const EarthLocationString = "Earth (C-137)";

  return location === EarthLocationString ? "eart" : "";
};

export const getShownOrHiddenClass = (condition) => {
  return condition ? "hidden" : "shown"
};