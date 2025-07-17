"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Pdf", value: 1800 },
  { name: "Docx", value: 936 },
  { name: "JPG", value: 1100 },
  { name: "PNG", value: 2000 },
  { name: "Mp4", value: 600 },
  { name: "Other", value: 200 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : v)} />
          <YAxis dataKey="name" type="category" />
          <Tooltip
            formatter={(value) => [value, ""]}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
          />
          <Bar dataKey="value" barSize={12} radius={[10, 10, 10, 10]} fill="#4A9B7C">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
