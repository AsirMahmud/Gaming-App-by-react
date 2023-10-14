import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { color } from "framer-motion";
import NavBar from "./components/NavBar";
import { useState } from "react";

const App = () => {
  const [darkmode, setDarkMode] = useState<boolean>(true);

  const useDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div data-theme={darkmode ? "dark" : "light"}>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar useDarkMode={useDarkMode}></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem
            area="aside"
            bg=""
            height={"full"}
            className="h-full bg-primary"
          >
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="">
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
