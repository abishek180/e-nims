"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/", label: "Service" },
    { href: "/", label: "Contact" },
  ];

  return (
    <div className="absolute w-full top-0 right-0 left-0 bg-transparent z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-white text-2xl font-semibold">e-NIMS</p>
          <div className="flex items-center gap-20 justify-between">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden relative z-50" onClick={toggleMenu}>
            <motion.div
              className="w-8 h-8 flex flex-wrap justify-center items-center cursor-pointer"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: { x: 6, y: 6, width: "8px", height: "2px", rotate: 45 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: -6,
                    y: 6,
                    width: "8px",
                    height: "2px",
                    rotate: -45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: 6,
                    y: -6,
                    width: "8px",
                    height: "2px",
                    rotate: -45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: -6,
                    y: -6,
                    width: "8px",
                    height: "2px",
                    rotate: 45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
