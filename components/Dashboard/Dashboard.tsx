"use client";
import React from 'react';
import MetricsCard from './MetricsCard';

const Dashboard = () => {

    const metrics = [
        {
            id: 1,
            title: "Signals Today",
            value: 128,
            change: "+18%",
        },
        {
            id: 2,
            title: "Insights Shipped",
            value: 42,
            change: "+6%",
        },
        {
            id: 3,
            title: "Automations Run",
            value: "1.2k",
            change: "+31%",
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full'>
            {
                metrics.map((metric) => (
                    <MetricsCard key={metric.id} metric={metric} />
                ))
            }
        </div>
    );
};

export default Dashboard;