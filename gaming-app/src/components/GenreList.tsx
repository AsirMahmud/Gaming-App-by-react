import useGenres, { Genres } from "../Hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenreSkeliton from "./GenreSkeliton";
interface props {
  onSelectGenre: (genre: Genres) => void;
}

function GenreList({ onSelectGenre }: props) {
  const { data, isLoading, error } = useGenres();
  return (
    <div>
      {isLoading && <GenreSkeliton></GenreSkeliton>}
      {data.map((i) => (
        <div
          onClick={() => onSelectGenre(i)}
          className="flex cursor-pointer justify-start items-center p-4 m-2 bg-base-100 hover:bg-base-300 rounded-xl"
          key={i.id}
        >
          <div className="avatar">
            <div className="w-12 rounded-full overflow-hidden ">
              <img
                className="object-cover"
                src={getCroppedImage(i.image_background)}
              />
            </div>
          </div>
          <div className="mx-4 ">
            <p className="text-sm lg:text-lg ">{i.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
