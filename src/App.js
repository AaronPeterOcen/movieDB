import React, { useState } from "react";
// import React from "react";
import Search from "./Components/Search";
// Results;
import axios from "axios";
// import Result from "./Components/Result";
import Results from "./Components/Results";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=e68165a0";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        // console.log(data);
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });

    // console.log(state.s);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flicker</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
