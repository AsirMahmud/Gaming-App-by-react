import React from "react";

import { Game } from "../Hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <div className="lg:w-72 w-56 rounded-xl md:h-96 shadow bg-base-200 card m-2 cursor-pointer  ">
      <div className="w-full h-56">
        <img
          src={game.background_image}
          className="h-full w-full p-1 object-cover rounded-xl shadow"
          alt="Product"
        />
      </div>
      <div className="m-2 flex  justify-between">
        <div className="cursor-pointer">
          <p className="font-bold  my-2">{game.name}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="md:badge-lg p-1 bg-green-400 rounded-lg flex justify-center items-center">
            <p className="text-black">96</p>
          </div>
        </div>
      </div>
      <PlatFormIconList
        platform={game.parent_platforms.map((i) => i.platform)}
      ></PlatFormIconList>
    </div>
  );
};

export default GameCard;
