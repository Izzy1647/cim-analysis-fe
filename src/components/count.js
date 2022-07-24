import React from "react";
import { AgChartsReact } from "ag-charts-react";

const Count = (props) => {
  const { data } = props;

  const options = {
    data,
    series: [
      {
        type: "pie",
        angleKey: "value",
        labelKey: "name",
        strokes: ["#8884d8", "#82ca9d", "#ed7672"],
        fills: ["#8884d8", "#82ca9d", "#ed7672"],
        highlightStyle: {
          item: {
            fill: "#ffd466",
          },
        },
      },
    ],
  };
  return (
    <>
      <h3>Percentage on which candidate is finally picked by player</h3>
      {/* {JSON.stringify(data)} */}
      <p>Numbers of each candidate get picked by players: <b>Joe:</b>{data[0].value}, <b>Emily:</b>{data[1].value},  <b>Adam:</b>{data[2].value}</p>
      <div style={{ maxWidth: "36%", margin: "0 auto" }}>
        <AgChartsReact options={options} />
      </div>
    </>
  );
};

export default Count;
