"use client";
import React from 'react';

const Automations = () => {
    const automations = [
  {
    id: 1,
    title: "Escalate critical signals → Slack",
    runs: "1,284 runs",
    status: "Active",
  },
  {
    id: 2,
    title: "Weekly insight digest → email",
    runs: "312 runs",
    status: "Active",
  },
  {
    id: 3,
    title: "Auto-tag anomalies in warehouse",
    runs: "8,904 runs",
    status: "Active",
  },
  {
    id: 4,
    title: "Sync scored leads → CRM",
    runs: "2,051 runs",
    status: "Paused",
  },
];
    return (
        <div className="space-y-4">
      {automations.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0B1118] p-4 transition-all duration-300 hover:border-teal-500/40 hover:bg-[#101720]"
        >
          {/* Left */}
          <div>
            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-white/45">
              {item.runs}
            </p>
          </div>

          {/* Right */}
          <div
            className={`flex items-center gap-2 text-sm font-medium ${
              item.status === "Active"
                ? "text-teal-400"
                : "text-gray-400"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                item.status === "Active"
                  ? "bg-teal-400"
                  : "bg-gray-500"
              }`}
            />
            {item.status}
          </div>
        </div>
      ))}
    </div>
    );
};

export default Automations;