import useGenres from "../Hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((i) => (
          <p>{i.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;
