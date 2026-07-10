"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
const Footer = () => {
  const links: any = {
    product: ['Flow', 'Workspace', 'Signal',],
    company: ['About Us', 'Careers', 'Blog', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Security']
  };
  const handleScroll = (e: any, id: any) => {
    e.preventDefault();
    // setIsOpen(false);   
    const targetSection = document.getElementById(id.toLowerCase());
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <footer className="w-full border-t border-white/5  text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 gap-8 lg:gap-12">
          {/* col1 */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* logo  */}
            <a href="#hero"
              onClick={(e) => handleScroll(e, "hero")}
              className="flex items-center gap-3 cursor-pointer group">
              <div className="bg-teal-500 text-black font-bold w-8 h-8 flex items-center justify-center rounded-[4px] text-lg">X</div>
              <span className="font-mono text-lg font-bold tracking-wider">Xai</span>
            </a>
            <p className="max-w-xs text-sm text-neutral-400">
              Turning raw noise into structured intelligence and automated actions in real-time.
            </p>
          </div>

          {/* col2  */}
          <div className="flex flex-col gap-3">
            <h4 className="text-teal-400 font-mono text-xs uppercase tracking-widest ">Product</h4>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {links.product.map((item: any) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={(e: any) => handleScroll(e, item)} className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* col3  */}
          <div className="flex flex-col gap-3">
            <h4 className="text-teal-400 font-mono text-xs uppercase tracking-widest ">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {links.company.map((item: any) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* col4  */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <h4 className="text-teal-400 font-mono text-xs uppercase tracking-widest ">Newsletter</h4>
            <div className="relative mt-1 flex items-center">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none transition-all focus:border-teal-400/50 focus:bg-white/[0.08]"
              />
              <button className="absolute right-1.5 p-1 text-teal-400 hover:text-white transition-colors">
                <FiArrowUpRight size={16} />
              </button>
            </div>
            {/* social item  */}
            <div className=" mt-4 flex gap-4 text-neutral-400">
              {[
                { icon: <FiTwitter size={18} />, href: "#" },
                { icon: <FiGithub size={18} />, href: "#" },
                { icon: <FiLinkedin size={18} />, href: "#" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="hover:text-teal-400 transition-colors duration-200">
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
        {/* footer bottom  */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Xai Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            {links.legal.map((item: any) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-neutral-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;