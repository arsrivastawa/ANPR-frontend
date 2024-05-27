import React from "react";
import { BarChart, Bar, Tooltip, XAxis, YAxis, Label } from "recharts";

const data = [
  {
    name: "Sun",
    nv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    nv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    nv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    nv: 278,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    nv: 189,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    nv: 239,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sat",
    nv: 349,
    pv: 4300,
    amt: 2100,
  },
];

export default function GraphMonthly() {
  return (
    <BarChart width={500} height={405} data={data}>
      <XAxis dataKey="name">
        <Label value="Days" offset={-1} position="insideBottom" />
      </XAxis>
      <YAxis>
        <Label value="No. Of Vehicles" angle={-90} position="insideLeft" />
      </YAxis>
      <Tooltip />
      <Bar dataKey="nv" fill="#8884d8" />
    </BarChart>
  );
}
