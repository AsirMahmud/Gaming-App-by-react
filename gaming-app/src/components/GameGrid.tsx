import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../Hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {games.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
