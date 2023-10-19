interface Props {
  setSelectSortOrder: (sortOrder: string) => void;
  selectedSort: string | null;
}
const SortSelctor = ({ setSelectSortOrder, selectedSort }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-raitng", label: "Average rating" },
  ];

  const foundedSort = sortOrder.find((i) => i.value == selectedSort);

  return (
    <div>
      <details className="dropdown ml-20">
        <summary className="m-1 btn">
          Order by - <span>{foundedSort?.label}</span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {sortOrder.map((i) => (
            <button
              onClick={() => setSelectSortOrder(i.value)}
              className="btn"
              value={i.value}
              key={i.value}
            >
              {i.label}
            </button>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default SortSelctor;
