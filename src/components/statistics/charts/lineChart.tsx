"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", web: 4000, app: 2400, amt: 2400 },
  { name: "February", web: 3000, app: 1398, amt: 2210 },
  { name: "March", web: 2000, app: 9800, amt: 2290 },
  { name: "April", web: 2780, app: 3908, amt: 2000 },
  { name: "May", web: 1890, app: 4800, amt: 2181 },
  { name: "June", web: 2390, app: 3800, amt: 2500 },
  { name: "July", web: 3490, app: 4300, amt: 2100 },
  { name: "August", web: 3890, app: 7300, amt: 1100 },
  { name: "September", web: 1203, app: 8300, amt: 1100 },
  { name: "October", web: 7490, app: 5300, amt: 6100 },
  { name: "November", web: 6490, app: 2300, amt: 6100 },
  { name: "December", web: 7690, app: 3050, amt: 1400 },
];

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="app" stroke="#8884d8" />
      <Line type="monotone" dataKey="web" stroke="#7DAFAF" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
