"use client";
import React from 'react';

const Signal = () => {
    const signals = [
  {
    id: 1,
    signal: "Churn risk — enterprise tier",
    score: 94,
    trend: "+12%",
    status: "Critical",
  },
  {
    id: 2,
    signal: "Pipeline anomaly · EU ingest",
    score: 81,
    trend: "+4%",
    status: "Watch",
  },
  {
    id: 3,
    signal: "Upsell cluster · fintech",
    score: 77,
    trend: "+9%",
    status: "Ready",
  },
  {
    id: 4,
    signal: "Latency drift · model v4",
    score: 63,
    trend: "-2%",
    status: "Stable",
  },
];
    return (
        <div id='/signals' className="overflow-x-auto rounded-xl border border-white/10 bg-[#0B1118]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-5 py-4 text-left text-[11px] uppercase tracking-[3px] text-white/50">
              Signal
            </th>

            <th className="px-5 py-4 text-left text-[11px] uppercase tracking-[3px] text-white/50">
              Score
            </th>

            <th className="px-5 py-4 text-left text-[11px] uppercase tracking-[3px] text-white/50">
              Trend
            </th>

            <th className="px-5 py-4 text-left text-[11px] uppercase tracking-[3px] text-white/50">
              State
            </th>
          </tr>
        </thead>

        <tbody>
          {signals.map((item) => (
            <tr
              key={item.id}
              className="border-b border-white/10 last:border-none hover:bg-white/[0.02] transition"
            >
              {/* Signal */}
              <td className="px-5 py-5 text-white font-medium">
                {item.signal}
              </td>

              {/* Score */}
              <td className="px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-[4px] rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-teal-400"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>

                  <span className="text-sm text-white/60">
                    {item.score}
                  </span>
                </div>
              </td>

                <td className='px-5 py-5 font-semibold text-teal-400 ' >
                {item.trend}
              </td>

              <td className="px-5 py-5">
                <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/60">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Signal;