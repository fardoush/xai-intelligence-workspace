"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const SignatureInteraction = () => {
    const [layout, setLayout] = useState('raw');

    const positions = {
        // raw mode 30 corner 
        raw: [
            { x: 12, y: 15 }, { x: 82, y: 18 }, { x: 45, y: 85 }, { x: 72, y: 62 }, { x: 18, y: 75 },
            { x: 62, y: 32 }, { x: 28, y: 12 }, { x: 78, y: 88 }, { x: 52, y: 22 }, { x: 88, y: 48 },
            { x: 22, y: 42 }, { x: 68, y: 15 }, { x: 35, y: 82 }, { x: 92, y: 78 }, { x: 15, y: 55 },
            { x: 58, y: 68 }, { x: 84, y: 28 }, { x: 42, y: 38 }, { x: 70, y: 92 }, { x: 32, y: 60 },
            { x: 14, y: 28 }, { x: 80, y: 35 }, { x: 48, y: 72 }, { x: 76, y: 12 }, { x: 25, y: 88 },
            { x: 65, y: 52 }, { x: 38, y: 24 }, { x: 85, y: 68 }, { x: 50, y: 42 }, { x: 95, y: 20 }
        ],
        clustered: [
            // 1 (Cyan Cluster) - left
            { x: 20, y: 40 }, { x: 24, y: 36 }, { x: 18, y: 45 }, { x: 26, y: 42 }, { x: 22, y: 35 },
            { x: 25, y: 46 }, { x: 19, y: 38 }, { x: 28, y: 40 }, { x: 23, y: 48 }, { x: 16, y: 42 },
            // 2 (Indigo/Blue Cluster) - right
            { x: 76, y: 38 }, { x: 80, y: 34 }, { x: 74, y: 44 }, { x: 82, y: 40 }, { x: 78, y: 32 },
            { x: 81, y: 45 }, { x: 75, y: 36 }, { x: 84, y: 38 }, { x: 79, y: 47 }, { x: 72, y: 41 },
            // 3 (Green Cluster) - middle
            { x: 48, y: 72 }, { x: 52, y: 68 }, { x: 46, y: 76 }, { x: 54, y: 74 }, { x: 50, y: 65 },
            { x: 53, y: 78 }, { x: 47, y: 70 }, { x: 56, y: 72 }, { x: 51, y: 80 }, { x: 44, y: 74 }
        ],
        ranked: [
            // Row 1 
            { x: 14, y: 32 }, { x: 22, y: 32 }, { x: 30, y: 32 }, { x: 38, y: 32 }, { x: 46, y: 32 },
            { x: 54, y: 32 }, { x: 62, y: 32 }, { x: 70, y: 32 }, { x: 78, y: 32 }, { x: 86, y: 32 },

            // Row 2 
            { x: 14, y: 50 }, { x: 22, y: 50 }, { x: 30, y: 50 }, { x: 38, y: 50 }, { x: 46, y: 50 },
            { x: 54, y: 50 }, { x: 62, y: 50 }, { x: 70, y: 50 }, { x: 78, y: 50 }, { x: 86, y: 50 },

            // Row 3
            { x: 14, y: 68 }, { x: 22, y: 68 }, { x: 30, y: 68 }, { x: 38, y: 68 }, { x: 46, y: 68 },
            { x: 54, y: 68 }, { x: 62, y: 68 }, { x: 70, y: 68 }, { x: 78, y: 68 }, { x: 86, y: 68 }
        ]
    }

    const getParticleColor = (index) => {
        if (layout === 'raw') return 'bg-slate-600 text-slate-600 shadow-slate-600/40';

        const row = Math.floor(index / 10);
        if (row === 0) return 'bg-teal-400 text-cyan-400 shadow-cyan-400/50';       // Group 1 (Cyan)
        if (row === 1) return 'bg-indigo-400 text-indigo-400 shadow-indigo-400/50'; // Group 2 (Indigo)
        return 'bg-sky-400 text-sky-400 shadow-sky-400/50'; // Group 3 (Green)
    };

    return (
        <div className='max-w-7xl mx-auto w-full px-5 py-8 md:py-14 lg:py-20'>
            {/* heading  and tabs button */}
            <div className="flex flex-wrap justify-between items-end  mb-6 md:mb-10 lg:mb-16">
                <div className="md:max-w-xl">
                    <p className="text-xs tracking-widest uppercase text-teal-500 font-mono">Signature</p>
                    <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                        Watch data organize itself
                    </h2>
                    <p className="text-white/55 text-sm mt-3 " >Unstructured events, as they arrive.
                    </p>
                </div>

                <div className=" mt-6 lg:mt-0 flex gap-2 text-sm bg-[#0B1118] p-1.5 rounded-lg border border-white/5 ">
                    {['raw', 'clustered', 'ranked'].map((data) => (
                        <button key={data} onClick={() => setLayout(data)} className={`px-4.5 md:px-6 py-2 rounded capitalize transition-all ${layout === data ? 'bg-teal-500 text-black ' : 'text-white/60'}`}>{data}</button>
                    ))}
                </div>
            </div>

            {/* cluster  */}
            <div className="relative h-[320px] md:h-[400px] lg:h-[500px]  w-full bg-[#0B1118] border border-white/5 rounded-xl ">

                {
                    positions[layout].map((pos, i) => (
                        <motion.div
                            key={i}
                            animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                            transition={{ type: "spring", stiffness: 90, damping: 14, delay: (i % 10) * 0.02 }}
                            className={`absolute w-2.5 h-2.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_currentColor] transition-colors duration-500 ${getParticleColor(i)}`}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SignatureInteraction;