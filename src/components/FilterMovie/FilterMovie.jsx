import "./FilterMovie.css";

function FilterMovie({ updateFilterInput, filter, visibleCount }) {
  const btnArr = [
    { name: "All", label: "Barcha kinolar", id: 1 },
    { name: "mostViewer", label: "Eng Ko'p ko'rilgan kinolar", id: 2 },
    { name: "", label: "Mashhur Kinolar", id: 3 },
  ];

  // const xz = btnArr.filter((btnFilter) => filter === "All" || filter === btnFilter.name || filter === "").length;
  return (
    <div>
      {btnArr.map((btnFilter) => (
        <button
          key={btnFilter.name}
          className={`btn ${filter === btnFilter.name ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => updateFilterInput(btnFilter.name)}
          type="button"
        >
          {btnFilter.label}
        </button>
      ))}
      <h3> {visibleCount > 0 ? `You're content number: ${visibleCount}` : "No content yet :("}</h3>
      {/* <h2>{visibleCount}</h2> */}
  
    </div>
  );
}

export default FilterMovie;
