"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "18-24", value: 12 },
  { name: "25-34", value: 44 },
  { name: "35-44", value: 26 },
  { name: "45-54", value: 16 },
  { name: "55+", value: 2 },
];

const COLORS = ["#A8D8C9", "#79B9A2", "#4A9B7C", "#2C7B61", "#155C48"];

const PieChartComponent = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-6">
      {/* Donut chart */}
      <div className="w-[220px] h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2 text-sm">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{entry.name}</span>
            <span className="ml-auto font-medium">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
