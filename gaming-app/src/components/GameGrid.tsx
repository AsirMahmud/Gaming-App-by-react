import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import Skeliton from "./skeliton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const items = Array.from({ length: 10 }, () => <Skeliton></Skeliton>);
  return (
    <div className="flex justify-center items-center m-2">
      {error && <p>{error}</p>}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {games.map((i) => (
          <GameCard game={i}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
