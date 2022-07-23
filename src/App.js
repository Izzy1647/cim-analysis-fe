import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import Candidates from "./components/candidates";

export const baseURL = "https://rich-jade-gopher-cuff.cyclic.app";

function App() {
  // const [data, setData] = React.useState(null);



  // if (!data) return null;

  // return (
  //   <div>
  //     {JSON.stringify(data)}
  //   </div>
  // );
  return (
    <div className="App">
      <h1>Coding interview simulation statistics</h1>

      <Candidates />
    </div>
  );
}

export default App;
