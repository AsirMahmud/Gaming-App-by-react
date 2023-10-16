import NavBar from "./components/NavBar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./Hooks/useGenres";

const App = () => {
  const [darkmode, setDarkMode] = useState<boolean>(true);
  const [selectedGernre, setSelectedGenre] = useState<Genres | null>(null);

  const useDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div data-theme={darkmode ? "dark" : "light"}>
      <div className="grid grid-cols-5 gap-3 ">
        <div className="col-span-5 sticky  ">
          <NavBar useDarkMode={useDarkMode}></NavBar>
        </div>

        <div className="bg-base-300 w-30% hidden md:block">
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </div>
        <div className="  col-span-5 md:col-span-4">
          <GameGrid selectedGenre={selectedGernre}></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
