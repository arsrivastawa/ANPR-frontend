import * as React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis, Label } from "recharts";

const data = [
  {
    name: "Jan",
    nv: 2400,
  },
  {
    name: "Feb",
    nv: 1398,
  },
  {
    name: "Mar",
    nv: 9800,
  },
  {
    name: "Apr",
    nv: 3908,
  },
  {
    name: "May",
    nv: 4800,
  },
  {
    name: "Jun",
    nv: 3800,
  },
  {
    name: "Jul",
    nv: 4100,
  },
  {
    name: "Aug",
    nv: 4500,
  },
  {
    name: "Sep",
    nv: 4000,
  },
  {
    name: "Oct",
    nv: 3000,
  },
  {
    name: "Nov",
    nv: 6100,
  },
  {
    name: "Dec",
    nv: 4300,
  },
];

export default function DailyChart() {
  return (
    <LineChart width={500} height={405} data={data}>
      <XAxis dataKey="name">
        <Label className="" value="Months" offset={-1} position="insideBottom" />
      </XAxis>
      <YAxis>
        <Label value="No. Of Vehicles" angle={-90} position="insideLeft" />
      </YAxis>
      <Tooltip />
      <Line type="monotone" dataKey="nv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}
