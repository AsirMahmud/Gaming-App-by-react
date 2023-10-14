import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { color } from "framer-motion";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="tomato">
          Nav
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area="aside" bg="teal">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="black">
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
