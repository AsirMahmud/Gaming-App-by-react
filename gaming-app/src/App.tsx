import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { color } from "framer-motion";
import NavBar from "./components/NavBar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  const [darkmode, setDarkMode] = useState<boolean>(true);

  const useDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div data-theme={darkmode ? "dark" : "light"}>
      <div className="grid grid-cols-5 gap-3 ">
        <div className="col-span-5 sticky  ">
          <NavBar useDarkMode={useDarkMode}></NavBar>
        </div>

        <div className="bg-base-300 hidden md:block">
          <GenreList></GenreList>
        </div>
        <div className="  col-span-5 md:col-span-4">
          <GameGrid></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
