import "./App.css";
import React from "react";
import Candidates from "./components/candidates";

export const baseURL = "https://rich-jade-gopher-cuff.cyclic.app";

function App() {
  return (
    <div className="App">
      <h1>Coding interview simulation statistics</h1>
      {/* <h3>Click on the character to see the stats</h3> */}

      <Candidates />
    </div>
  );
}

export default App;
