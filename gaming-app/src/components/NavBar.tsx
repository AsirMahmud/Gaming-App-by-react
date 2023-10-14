import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import { useState } from "react";

interface Props {
  useDarkMode: () => void;
}

const NavBar = ({ useDarkMode }: Props) => {
  const [darkmode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkmode); // Toggle dark mode state
    useDarkMode(); // Call the provided useDarkMode function
  };

  return (
    <div>
      <div className="flex justify-between items-center shadow-lg">
        <HStack>
          <Image src={logo} className="w-16"></Image>
          <Text>The Redstone</Text>
        </HStack>
        <div className="p-2">
          <button onClick={toggleDarkMode} className="btn">
            <div className="flex justify-evenly items-center">
              {darkmode ? (
                <Icon icon="radix-icons:sun" className="text-3xl p-1" />
              ) : (
                <Icon icon="solar:moon-bold-duotone" className="text-3xl p-1" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
