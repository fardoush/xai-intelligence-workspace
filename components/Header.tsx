"use client";

import { MenuIcon, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="bg-teal-500 text-black font-bold w-8 h-8 flex items-center justify-center rounded-[4px] text-lg">X</div>
                    <div className="font-bold text-white tracking-tight text-xl">Xai</div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["FLOW", "WORKSPACE", "SIGNAL"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-medium tracking-widest text-neutral-400 hover:text-teal-400 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/*  Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl px-8 pt-32 flex flex-col justify-start z-40"
                    >
                        {/* Navigation Links */}
                        <div className="flex flex-col gap-8">
                            {["FLOW", "WORKSPACE", "SIGNAL"].map((item, index) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}

                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-light tracking-widest text-neutral-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;