"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Chart from './Chart';
import Signal from './Signal/Signal';
import Automations from './Automations/Automations';

const DashboardPreview = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    return (
        <div className='max-w-7xl mx-auto px-3 md:px-5 py-20 md:py-32'>
            <div className="mb-14  md:mb-20">
                <p className="text-xs tracking-widest uppercase text-teal-500 font-mono">The workspace</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                    Where intelligence lives
                </h2>
            </div>
            {/* Dashboard UI */}

            <div className="relative rounded-2xl border border-[#1B2A35] bg-[#0B1118]  shadow-[0_0_25px_rgba(16,185,129,0.09),0_0_80px_rgba(16,185,129,0.09)]">
                {/* heading  */}
                <div className="flex gap-3 border-b border-white/10 py-4 px-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
                    </div>
                    <span className="text-xs text-white/35">xai.app/workspace</span>
                </div>

                <div className="flex md:flex-row flex-col">
                    {/* sidebar  */}
                    <Sidebar activeTab={activeTab}
                        setActiveTab={setActiveTab} />
                    {/* main content  */}
                    <main className="flex-1 px-4 py-6 md:px-5 lg:px-6 space-y-8 min-h-screen  md:min-h-[600px] ">
                        {activeTab === "dashboard" && (
                            <>
                                <Dashboard />
                                <Chart />
                            </>
                        )}

                        {activeTab === "signals" && (
                            <Signal />
                        )}

                        {activeTab === "automations" && (
                            <Automations />
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardPreview;