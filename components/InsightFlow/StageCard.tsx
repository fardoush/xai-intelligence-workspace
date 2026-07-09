"use client";
import React from 'react';
import { motion } from "framer-motion";

interface StageCardProps {
    stage: {
        id: string;
        title: string;
        text: string;
        dots: number[][];
        lines: number[][];
        isTarget?: boolean;
    };
}

const StageCard = ({ stage }: StageCardProps) => {
    const { id, title, text, dots, lines, isTarget } = stage;
    return (
        <div>
            <motion.article
                initial={{ opacity: 0.25, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='group grid grid-cols-1 gap-8 rounded-2xl border border-neutral-800/60 bg-[#0B1118] p-6 transition-all duration-500 hover:border-teal-500/30  sm:p-8 md:grid-cols-[1fr_200px] md:p-10'
            >
                {/* Left Side  */}
                <div className="flex flex-col justify-center">
                    <div className="flex   items-baseline gap-4">
                        <span className="font-mono text-sm font-semibold text-teal-500">{id}</span>
                        <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-teal-400">
                            {title}
                        </h3>
                    </div>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                        {text}
                    </p>
                    <div className="mt-6 h-[2px] w-12 bg-[#0B1118] transition-all duration-500 group-hover:w-24 group-hover:bg-teal-500/50" />
                </div>

                {/* Right Side  */}

                <div className="flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative h-36 w-36 overflow-hidden rounded-2xl border border-neutral-800 bg-[#0B1118]  flex items-center justify-center transition-colors duration-500 group-hover:border-teal-500/20 shadow-2xl">
                        <svg viewBox="0 0 200 200" className="h-full w-full text-teal-400 p-2">
                            {isTarget && (
                                <>
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="60"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                        opacity={0.25}
                                    />
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        opacity={0.4}
                                    />
                                </>
                            )}

                            {lines.map((line, lineIdx) => {
                                const start = dots[line[0]];
                                const end = dots[line[1]];
                                return (
                                    <motion.line
                                        key={lineIdx}
                                        x1={start[0]}
                                        y1={start[1]}
                                        x2={end[0]}
                                        y2={end[1]}
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        opacity={0.35}
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 0.8, delay: 0.15 }}
                                    />
                                );
                            })}

                            {/* dot animation  */}
                            {dots.map((dot, dotIdx) => (
                                <motion.circle
                                    key={dotIdx}
                                    cx={dot[0]}
                                    cy={dot[1]}
                                    r={isTarget ? 7 : 4.5}
                                    fill="currentColor"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 160, delay: dotIdx * 0.03 }}
                                />
                            ))}
                        </svg>
                    </motion.div>
                </div>
            </motion.article>
        </div>
    );
};

export default StageCard;