import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recharts1 from "./ReCharts/ReCharts1";
import Recharts2 from "./ReCharts/ReCharts2";
import Recharts3 from "./ReCharts/ReCharts3";
import Chartist from "./chartits/Chartist";

function App() {
  return (
    <div>
      <Recharts1 />
      <Recharts3 />
      <Recharts2 />

      <div>
        <button>but1</button>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Chartist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
