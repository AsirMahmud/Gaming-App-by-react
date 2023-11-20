import { BsSearch } from "react-icons/bs";
import { useState } from "react";
interface props {
  onSerach: (value: string) => void;
}
const InputGroup = ({ onSerach }: props) => {
  const [nowInput, setInput] = useState<string | null>(null);
  return (
    <form
      className=" flex items-center m-2 justify-evenly"
      onSubmit={(event) => {
        event.preventDefault();
        if (nowInput) {
          console.log(nowInput);
          onSerach(nowInput);
        }
      }}
    >
      <input
        className="w-20 md:w-60 input"
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search.."
      ></input>
      <button className="btn" type="submit">
        <BsSearch></BsSearch>
      </button>
    </form>
  );
};

export default InputGroup;
