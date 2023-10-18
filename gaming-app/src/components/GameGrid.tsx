import { GameQuery } from "../App";
import useGames, { Platform } from "../Hooks/useGames";
import { Genres } from "../Hooks/useGenres";
import GameCard from "./GameCard";
import Skeliton from "./Skeliton";

interface Props {
  gameQuery: GameQuery;
  selectedGenre: Genres | null;
  seletedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const items = Array.from({ length: 10 }, () => <Skeliton></Skeliton>);
  return (
    <div className="flex justify-center items-center m-2">
      {error && <p>{error}</p>}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((i) => (
            <GameCard key={i.id} game={i}></GameCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameGrid;
