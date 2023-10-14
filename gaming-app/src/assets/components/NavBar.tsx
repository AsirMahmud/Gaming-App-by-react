import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../logo.png";
const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="20"></Image>
        <Text>The Redstone</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
