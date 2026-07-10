"use client";
import React from 'react';

const MetricsCard = ( {metric}: { metric: any } ) => {
    const { title, value, change } = metric;
    return (
        <div className='w-full p-4 rounded-lg border border-white/10 hover:border-teal-600 transition-all duration-500'>
            <span className="text-xs text-white/50 uppercase font-mono tracking-widest ">{title}</span>

            <div className=" relative flex gap-2 mt-2">
                <h3 className="text-3xl text-white">{value}</h3>
                <span className=" absolute bottom-1 right-0 text-teal-600 font-bold text-xs">{change}</span>
            </div>
        </div>
    );
};

export default MetricsCard;