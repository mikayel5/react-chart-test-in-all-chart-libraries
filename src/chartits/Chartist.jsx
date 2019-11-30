import React from "react";
import ChartistGraph from "react-chartist";
import {
  //dailySalesChart,
  //emailsSubscriptionChart,
  //completedTasksChart,
  economicChart,
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

export default function Chartist() {
  return (
    <div className="App">
      <div>
        <ChartistGraph data={dataPie} type="Pie" />
        <ChartistGraph data={simpleLineChartData} type={"Line"} />
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
        <ChartistGraph
          className="ct-chart"
          data={economicChart.data}
          type="Bar"
          options={economicChart.options}
          responsiveOptions={economicChart.responsiveOptions}
        />
      </div>
    </div>
  );
}
