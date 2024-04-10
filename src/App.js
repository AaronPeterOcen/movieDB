import React, { useState } from "react";
// import React from "react";
import axios from "axios";
// import Result from "./Components/Result";
import Search from "./Components/Search";
import Results from "./Components/Results";
import Popup from "./Components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  // add your api key here
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

  // functionw will handle the input functionality
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });

    // console.log(state.s);
  };

  //handles the pop up functionality of the movies
  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  // handles the pop-up close functionality
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FlickFinder</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
        <p>
          Challenges are what make life interested and overcoming them is what
          makes life meaningful.
          <p>Joshua J. Marine</p>
        </p>
      </main>
    </div>
  );
}

export default App;
