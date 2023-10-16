import { Platform } from "../Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

interface props {
  platform: Platform[];
}

const PlatFormIconList = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneAndroid,
    web: FaGlobe,
    android: FaAndroid,
  };

  return (
    <div className="flex justify-evenly m-4">
      {platform.map((i) => (
        <Icon as={iconMap[i.slug]}></Icon>
      ))}
    </div>
  );
};

export default PlatFormIconList;
