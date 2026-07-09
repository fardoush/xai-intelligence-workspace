"use client";
import React from 'react';
import { LayoutGrid, GitBranch, Activity, BarChart3, Zap, Settings } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {

    const menuItems = [
        { name: "Dashboard", icon: LayoutGrid, value: "dashboard", },
        { name: "Pipelines", icon: GitBranch, value: "pipelines" },
        { name: "Signals", icon: Activity, value: "signals", },
        { name: "Insights", icon: BarChart3, value: "insights", },
        { name: "Automations", icon: Zap, value: "automations", },
        { name: "Settings", icon: Settings, value: "settings" },
    ]
    return (
        <div className=' h-auto w-full lg:w-64 md:w-52 bg-[#0B1118] md:bg-transparent border-r border-white/5 lg:p-6 md:p-5 p-4 flex flex-col gap-6 text-[13px] font-medium tracking-wide
        z-40 transition-transform duration-300 ease-in-out '>
            <div className=" md:mt-0 flex flex-col gap-6">
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Navigate</span>
            </div>

            {/* item  */}
            <nav className="grid md:grid-cols-1  grid-cols-6 gap-1">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;

                    return (
                        <button
                            key={item.value}
                            onClick={() => setActiveTab(item.value)}
                            className={`transition-all w-full flex items-center gap-3 px-3 py-2 rounded-lg border ${activeTab === item.value
                                ? "text-teal-400 bg-white/5 border-white/5"
                                : "text-white/50 hover:text-white border-transparent hover:bg-white/[0.02]"
                                }`}
                        >
                            <IconComponent
                                size={16}
                                className={
                                    activeTab === item.value
                                        ? "text-teal-400"
                                        : "text-white/40"
                                }
                            />

                            <span className="hidden md:block">
                                {item.name}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;