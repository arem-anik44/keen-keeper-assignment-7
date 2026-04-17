import { useEffect, useState } from "react";
import { getData } from "../utils/localDB";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = getData();
    setData(storedData);
  }, []);

  const textCount = data.filter((item) => item.type === "Text").length;
  const callCount = data.filter((item) => item.type === "Call").length;
  const videoCount = data.filter((item) => item.type === "Video").length;

  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ].filter((item) => item.value > 0);

  const colors = ["#7C3AED", "#1F5A4A", "#34A853"];

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-8">
          Friendship Analytics
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 min-h-[500px]">
          <h3 className="text-2xl font-semibold text-[#244D3F] mb-8">
            By Interaction Type
          </h3>

          {chartData.length === 0 ? (
            <div className="h-[350px] flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-[#1F2937] mb-2">
                  No analytics data found
                </h4>
                <p className="text-[#6B7280]">
                  Add some interactions first from the friend details page.
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="45%"
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={6}
                    dataKey="value"
                    nameKey="name"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ paddingTop: "20px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;