import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CharacterCard from ".";

let container = null;
beforeEach(() => {
  container = document.createElement("div");

  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders character data", async () => {
  const fakeCharacter = {
    id: 123,
    name: "Rick",
    status: "Alive",
    species: "Humanoid",
    image: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    location: {
      name: "Immortality Field Resort",
    },
    episode: ["https://rickandmortyapi.com/api/character/3"],
  };

  const episodes = [
    {
      id: 3,
      name: "Citadel of Ricks",
      type: "Space station",
      dimension: "unknown",
      url: "https://rickandmortyapi.com/api/location/3",
      created: "2017-11-10T13:08:13.191Z",
    },
    {
      id: 21,
      name: "Testicle Monster Dimension",
      type: "Dimension",
      dimension: "Testicle Monster Dimension",
      url: "https://rickandmortyapi.com/api/location/21",
      created: "2017-11-18T19:41:01.605Z",
    },
  ];

  act(() => {
    render(
      <CharacterCard character={fakeCharacter} episodes={episodes} />,
      container
    );
  });

  expect(container.querySelector(".character-info h1").textContent).toBe(
    fakeCharacter.name
  );

  expect(container.querySelector(".main-info").textContent).toContain(
    fakeCharacter.status
  );
  expect(container.querySelector(".main-info").textContent).toContain(
    fakeCharacter.species
  );
  expect(container.querySelector(".description").textContent).toContain(
    fakeCharacter.location.name
  );
  expect(container.querySelector(".description").textContent).toContain(
    episodes[0].name
  );
});
