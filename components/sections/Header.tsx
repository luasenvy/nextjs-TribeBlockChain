"use client";

import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import ViewTransitionLink from "../ViewTransitionLink";

import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import LogoImage from "@/public/assets/images/logo.svg";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Make sure we cannot scroll down while we on burger menu state isOpen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <ViewTransitionLink href="/">
                <Image src={LogoImage} alt="BlockForge Logo" />
              </ViewTransitionLink>
            </div>
            <div className="flex items-center gap-4">
              <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
              <div
                className="size-10 relative cursor-pointer group"
                onClick={() => setIsOpen((curr) => !curr)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={classnames(
                      twMerge(
                        "bg-zinc-300 group-hover:bg-fuchsia-400 w-5 h-0.5 -translate-y-1 transition-all duration-500"
                      ),
                      { "translate-y-0 rotate-45": isOpen }
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={classnames(
                      twMerge(
                        "bg-zinc-300 group-hover:bg-fuchsia-400 w-5 h-0.5 translate-y-1 transition-all duration-500"
                      ),
                      { "-translate-y-0 -rotate-45": isOpen }
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <Hexagon size={1100} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav>
                  <ul className="flex flex-col items-center gap-12 md:gap-16">
                    {navLinks.map(({ title, href }, index) => (
                      <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ase: "linear", delay: 0.24 * index }}
                        key={title}
                      >
                        <ViewTransitionLink href={href} onClick={() => setIsOpen((curr) => !curr)}>
                          <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300">
                            {title}
                          </span>
                        </ViewTransitionLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
