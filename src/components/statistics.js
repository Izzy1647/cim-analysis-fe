import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = (props) => {
  const { candidate, data } = props;
  const chartData = [];
  for (let key in data) {
    const temp = {};
    temp["name"] = key;
    temp["mark"] = data[key];
    chartData.push(temp);
  }

  return (
    <>
      <h3>{candidate}'s average score marked by all players</h3>
      <p>
        <b>Fizzbuzz</b>: {data.fizzbuzz} | <b>Two Sum</b>: {data.twosum} |{" "}
        <b>Longest Palindromic Substring</b>: {data.lps}
      </p>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <ResponsiveContainer
          height={"100%"}
          width={"100%"}
          aspect={2}
          minHeight={300}
          minWidth={200}
        >
          <BarChart
            width={480}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
            style={{ margin: "10 auto" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="mark" fill="#42c97b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
