"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    { name: "Jan", uv: 1200 },
    { name: "Feb", uv: 2100 },
    { name: "Mar", uv: 1800 },
    { name: "Apr", uv: 2800 },
    { name: "May", uv: 2400 },
    { name: "Jun", uv: 3200 },
];

const Chart = () => {
    return (
        <div className="w-full h-[280px] sm:h-[320px] lg:h-[380px] outline-none">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.02} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        stroke="#1F2937"
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#94A3B8",
                            fontSize: 12,
                        }}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        width={35}
                        tick={{
                            fill: "#94A3B8",
                            fontSize: 12,
                        }}
                    />

                    <Tooltip
                        cursor={{
                            stroke: "#14B8A6",
                            strokeWidth: 1,
                            strokeDasharray: "4 4",
                        }}
                        contentStyle={{
                            backgroundColor: "#0B1118",
                            border: "1px solid #1F2937",
                            borderRadius: "10px",
                            color: "#fff",
                        }}
                        labelStyle={{
                            color: "#fff",
                        }}
                        itemStyle={{
                            color: "#14B8A6",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#14B8A6"
                        strokeWidth={2}
                        fill="url(#colorUv)"
                        dot={false}
                        activeDot={{
                            r: 5,
                            fill: "#14B8A6",
                            stroke: "#fff",
                            strokeWidth: 2,
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;