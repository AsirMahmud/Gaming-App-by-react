interface props {
  critic: number;
}

const CriticScore = ({ critic }: props) => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <div className="md:badge-lg badge p-1  bg-gray-500 shadow rounded-lg flex justify-center items-center">
          <p className="text-green-300">{critic}</p>
        </div>
      </div>
    </div>
  );
};

export default CriticScore;
