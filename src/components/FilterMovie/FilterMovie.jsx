import "./FilterMovie.css";

function FilterMovie({ updateFilterInput, filter }) {
  const btnArr = [
    { name: "All", label: "Barcha kinolar" },
    { name: "mostViewer", label: "Eng Ko'p ko'rilgan kinolar" },
    // { name: "", label: "Mashhur Kinolar" },
  ];

  return (
    <div>
      {btnArr.map((btnFilter) => (
        <button
          key={btnFilter.name}
          updateFilterInput={updateFilterInput}
          className={`btn ${filter === btnFilter.name ? "btn-dark" : "btn-dark"}`}
          onClick={() => updateFilterInput(btnFilter.name)}
          type="button"
        >
          {btnFilter.label}
        </button>
      ))}

      {/* <button className="button3 button " style={{ backgroundColor: activeButton === "button3" ? "crimson" : "" }} onClick={() => handleButtonClick("button3")}>
        Eng Ko'p ko'rilgan kinolar
      </button> */}
    </div>
  );
}

export default FilterMovie;
