import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import { useState } from "react";
import InputGroup from "./InputGroup";

interface Props {
  useDarkMode: () => void;
  onSerach: (value: string) => void;
}

const NavBar = ({ useDarkMode, onSerach }: Props) => {
  const [darkmode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkmode); // Toggle dark mode state
    useDarkMode(); // Call the provided useDarkMode function
  };

  return (
    <div className="flex justify-between items-center  shadow-lg  ">
      <div className="flex justify-between w-[60%]">
        <div className="w-14 flex">
          <img src={logo} className=""></img>
          <div className="flex justify-evenly text-accent-content items-center">
            <p className="text-lg md:text-3xl">Redstone</p>
          </div>
        </div>
      </div>

      <div className="p-2 flex justify-between   items-center">
        <div className="md:ml-10 ">
          <InputGroup onSerach={onSerach}></InputGroup>
        </div>
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
  );
};

export default NavBar;
