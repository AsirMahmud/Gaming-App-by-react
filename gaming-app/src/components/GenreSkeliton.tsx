const GenreSkeliton = () => {
  return (
    <div>
      {Array.from({ length: 10 }, (index: number) => (
        <div className="h-24 mx-auto  rounded-md w-60" key={index}>
          <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
            <div className="w-12 h-12 bg-base-100 rounded-full "></div>
            <div className="flex flex-col space-y-3">
              <div className="h-6 bg-base-100 rounded-md w-36 "></div>
              <div className="w-24 h-6 bg-base-100 rounded-md "></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenreSkeliton;
