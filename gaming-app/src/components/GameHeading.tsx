interface Props {
  genreText: string | null;
}

const GameHeading = ({ genreText }: Props) => {
  return (
    <div>
      <h1 className="text-6xl">{genreText ? genreText + " Games" : "Games"}</h1>
    </div>
  );
};

export default GameHeading;
