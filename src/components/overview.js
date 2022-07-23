import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Overview = (props) => {
  const { data } = props;
  const chartData = Object.keys(data).map((key) => {
    const scores = data[key]
    return {
      name: key,
      ...scores
    }
  })
  
  return (
    <>
      <h3>Average score overview, marked by all players</h3>
      {/* <p>{JSON.stringify(chartData)}</p> */}
      <div style={{ margin: "0 auto" }}>
        <ResponsiveContainer
          height={"50%"}
          width={"50%"}
          aspect={2}
          minHeight={300}
          minWidth={200}
        >
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fizzbuzz" fill="#8884d8" />
            <Bar dataKey="twosum" fill="#82ca9d" />
            <Bar dataKey="lps" fill="#ed7672" />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Overview;
