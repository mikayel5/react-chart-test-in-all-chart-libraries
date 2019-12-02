import React from "react";
import "./chartist.css";
import ChartistGraph from "react-chartist";
import {
  //dailySalesChart,
  //emailsSubscriptionChart,
  //completedTasksChart,
  //economicChart,
  dataPie
} from "./charts";

const simpleLineChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
};
//PIe
const speedPieChartData = {
  series: [20, 10, 30, 40]
};
const PieChartOptions = {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
};

//
const lineChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [[5, 9, 7, 8, 5, 3, 5, 4]]
};
const lineChartOptions = {
  low: 0,
  showArea: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return "$" + value;
    }
  },
  axisX: {
    labelInterpolationFnc: function(value) {
      return value + "M";
    }
  }
};

export default function Chartist() {
  return (
    <div className="App">
      <div>
        <ChartistGraph
          data={lineChartData}
          options={lineChartOptions}
          type={"Line"}
        />
        <ChartistGraph data={dataPie} type="Pie" className="chart1" />
        <ChartistGraph
          className="chart2"
          data={simpleLineChartData}
          type={"Line"}
        />
        <ChartistGraph
          data={speedPieChartData}
          options={PieChartOptions}
          type={"Pie"}
        />
        {/* <ChartistGraph
          className="ct-chart"
          data={dailySalesChart.data}
          type="Line"
          options={dailySalesChart.options}
          listener={dailySalesChart.animation}
        /> */}
        {/* <ChartistGraph
          className="ct-chart"
          data={emailsSubscriptionChart.data}
          type="Bar"
          options={emailsSubscriptionChart.options}
          responsiveOptions={emailsSubscriptionChart.responsiveOptions}
          listener={emailsSubscriptionChart.animation}
        /> */}
        {/* <ChartistGraph
          className="ct-chart"
          data={dailySalesChart.data}
          type="Line"
          options={dailySalesChart.options}
          listener={dailySalesChart.animation}
        /> */}
        {/* <ChartistGraph
          className="ct-chart"
          data={completedTasksChart.data}
          type="Line"
          options={completedTasksChart.options}
          listener={completedTasksChart.animation}
        /> */}
        {/* <ChartistGraph
          className="ct-chart"
          data={economicChart.data}
          type="Bar"
          options={economicChart.options}
          responsiveOptions={economicChart.responsiveOptions}
        />
        <ChartistGraph data={dataPie} type="Pie" className="chart5" /> */}
      </div>
    </div>
  );
}
