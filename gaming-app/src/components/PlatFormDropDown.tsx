import usePlatForm from "../Hooks/usePlatFrom";
import { Platform } from "../Hooks/useGames";
interface props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatFormDropDown = ({ onSelectPlatform }: props) => {
  const { data } = usePlatForm();
  return (
    <div>
      <details className="dropdown ml-2 md:ml-20">
        <summary className="m-1 btn">PlatForms</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {data.map((i) => (
            <li className="btn" onClick={() => onSelectPlatform(i)}>
              {i.name}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default PlatFormDropDown;
