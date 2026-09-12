"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  FaHouse,
  FaLocationArrow,
  FaUser,
  FaFolder,
  FaQuoteLeft,
  FaEnvelope,
  FaBriefcase,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

const icons = {
  home: FaHouse,
  user: FaUser,
  briefcase: FaBriefcase,
  folder: FaFolder,
  timeline: FaClockRotateLeft,
  quote: FaQuoteLeft,
  envelope: FaEnvelope,
};

type NavItem = {
  name: string;
  link: string;
  icon: string;
};


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        aria-label="Main Navigation"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-5000 items-center justify-center px-2",
          className
        )}
      >
        <div className="flex items-center justify-center gap-1 rounded-full border border-white/20 px-3 sm:px-6 py-2.5 shadow-xl shadow-black/40 backdrop-blur-md bg-black-100/90">
          {/* Nav items container */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((navItem: NavItem, idx: number) => {
              const IconComponent =
                navItem.icon && icons[navItem.icon as keyof typeof icons]
                  ? icons[navItem.icon as keyof typeof icons]
                  : FaLocationArrow;
              return (
                <a
                  key={`link-${idx}`}
                  href={navItem.link}
                  aria-label={navItem.name}
                  className={cn(
                    "relative flex items-center justify-center gap-1.5 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                  )}
                >
                  <IconComponent className="h-4 w-4 shrink-0 text-purple block sm:hidden" />
                  <span className="hidden sm:block">{navItem.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
