import useGenres from "../Hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenreSkeliton from "./GenreSkeliton";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  return (
    <div>
      {isLoading && <GenreSkeliton></GenreSkeliton>}
      {data.map((i) => (
        <div className="flex justify-start items-center p-4 m-2 bg-base-100 rounded-xl">
          <div className="avatar" key={i.id}>
            <div className="w-12 rounded-full overflow-hidden ">
              <img
                className="object-cover"
                src={getCroppedImage(i.image_background)}
              />
            </div>
          </div>
          <div className="mx-4">
            <p className="text-sm lg:text-lg">{i.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
