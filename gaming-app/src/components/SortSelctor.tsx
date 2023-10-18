import React from "react";

const SortSelctor = () => {
  return (
    <div>
      <details className="dropdown ml-20">
        <summary className="m-1 btn">Order by relevence</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <button className="btn">Relevance</button>
          <button className="btn">Date added</button>
          <button className="btn">Name</button>
          <button className="btn">Release Date</button>
          <button className="btn">Popularity</button>
          <button className="btn">Average rating</button>
        </ul>
      </details>
    </div>
  );
};

export default SortSelctor;
