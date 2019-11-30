import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//  import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ChartistGraph from "react-chartist";

class Bar extends React.Component {
  render() {
    var simpleLineChartData = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    };

    //var type = "Bar";

    return (
      <div>
        <ChartistGraph data={simpleLineChartData} type={"Line"} />
      </div>
    );
  }
}

ReactDOM.render(<Bar />, document.body);

serviceWorker.unregister();
