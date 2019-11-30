import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChartistGraph from "react-chartist";

var simpleLineChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ChartistGraph data={simpleLineChartData} type={"Line"} />
        </div>
      </header>
    </div>
  );
}

export default App;
