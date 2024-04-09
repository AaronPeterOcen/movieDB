import React from "react";

// component that handles the results displayed
function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
