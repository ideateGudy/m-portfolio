"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  FaLocationArrow,
  FaUser,
  FaFolder,
  FaQuoteLeft,
  FaEnvelope,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

const icons = {
  home: FaLocationArrow,
  user: FaUser,
  folder: FaFolder,
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

  navItems.map(item => {
    if(typeof item.icon === "string") return item.icon as keyof typeof icons
})

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
      <motion.div
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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-5000 items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-10 py-5 shadow-lg shadow-black/10 backdrop-blur-md bg-black-100">
          {/* Nav items container */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem: NavItem, idx: number) => {
            const IconComponent = navItem.icon && icons[navItem.icon as keyof typeof icons] ? icons[navItem.icon as keyof typeof icons] : FaLocationArrow;
            return (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                )}
              >
                <IconComponent className="h-4 w-4 shrink-0 text-white block sm:hidden" />
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            );})}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-neutral-200 dark:bg-white/10" />

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
