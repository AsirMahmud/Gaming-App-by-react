import NavBar from "./components/NavBar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatFormDropDown from "./components/PlatFormDropDown";
import SortSelctor from "./components/SortSelctor";
import { Genres } from "./Hooks/useGenres";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string | null;
}

const App = () => {
  const [darkmode, setDarkMode] = useState<boolean>(true);
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: null,
  });

  const useDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div data-theme={darkmode ? "dark" : "light"}>
      <div className="grid grid-cols-5 gap-3 ">
        <div className="col-span-5 sticky">
          <NavBar useDarkMode={useDarkMode}></NavBar>
        </div>

        <div className="bg-base-300 w-30% hidden md:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </div>
        <div className="col-span-5 md:col-span-4">
          <div className="flex">
            <PlatFormDropDown
              onSelectPlatform={(platform) =>
                setGameQuery((prevGameQuery) => ({
                  ...prevGameQuery,
                  platform,
                }))
              }
            ></PlatFormDropDown>
            <SortSelctor
              selectedSort={gameQuery.sortOrder}
              setSelectSortOrder={(sortOrder) =>
                setGameQuery((prevGameQuery) => ({
                  ...prevGameQuery,
                  sortOrder,
                }))
              }
            ></SortSelctor>
          </div>
          <GameGrid
            gameQuery={gameQuery}
            seletedPlatform={gameQuery.platform}
            selectedGenre={gameQuery.genre}
          ></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
