import { Game } from "../Hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <div className="lg:w-72 w-56 bg-base-300 rounded-xl md:h-96 shadow  card m-2 cursor-pointer  ">
      <div className="w-full h-56">
        <img
          src={getCroppedImage(game.background_image)}
          className="h-full w-full p-1 object-cover rounded-xl shadow"
          alt="Product"
        />
      </div>
      <div className="m-2 flex  justify-between items-center">
        <div className="cursor-pointer">
          <p className="font-bold  my-2">{game.name}</p>
        </div>

        <CriticScore critic={game.metacritic}></CriticScore>
      </div>
      <PlatFormIconList
        platform={game.parent_platforms.map((i) => i.platform)}
      ></PlatFormIconList>
    </div>
  );
};

export default GameCard;
