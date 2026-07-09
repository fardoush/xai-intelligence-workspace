"use client";

import { useScroll, useSpring, motion } from 'framer-motion';
import React, { useRef } from 'react';
import StageCard from './StageCard';

const InsightFlow = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // scroll track 
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 65%", "end 75%"]
    });
    //   smooth scroll bar 
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 25,
        restDelta: 0.001
    });
    const stages = [
        {
            id: "01",
            title: "Ingest data",
            text: "Streams, files, events and APIs land in one pipeline. Schema is inferred, noise is dropped at the edge.",
            dots: [[40, 50], [160, 60], [100, 150], [60, 130], [140, 120]],
            lines: []
        },
        {
            id: "02",
            title: "Analyze with AI",
            text: "Models cluster, rank and correlate. Every signal is scored against your objectives — continuously.",
            dots: [[100, 40], [50, 110], [150, 110], [100, 140]],
            lines: [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2]]
        },
        {
            id: "03",
            title: "Generate insight",
            text: "Findings arrive as decisions, not dashboards. Each insight can trigger an automation instantly.",
            dots: [[100, 100]],
            lines: [],
            isTarget: true
        },
    ];
    return (
        <section className='relative max-w-7xl mx-auto px-5 py-20 text-white md:py-32'>
            {/* header  */}
            <div className="mb-14 max-w-xl md:mb-20">
                <p className="text-xs tracking-widest uppercase text-teal-500 font-mono">The flow</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                    Three moves from noise to action
                </h2>
            </div>

            {/* main area scroll track  */}
            <div ref={containerRef} className="relative md:pl-12">
                {/* right side progressbar  */}
                <div className="absolute left-0 top-4 hidden h-[calc(100%-40px)] w-[2px] bg-[#0B1118] md:block">
                    <motion.div
                        style={{ scaleY }}
                        className='h-full w-full origin-top bg-gradient-to-b from-teal-500 to-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.5)]'
                    />
                </div>

                {/* flow card  */}
                <div className="flex flex-col gap-8">
                    {
                        stages.map((stage) => (
                            <StageCard key={stage.id} stage={stage}></StageCard>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default InsightFlow;