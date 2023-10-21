import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <div>
      <h1 className="sm:text-7xl text-4xl  m-4">{heading}</h1>
    </div>
  );
};

export default GameHeading;
