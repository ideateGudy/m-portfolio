"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight";
import MagicButton from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { resumeUrl, socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-16 pt-15 md:pt-12 relative scroll-mt-0" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black-100 pointer-events-none">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
            "dark:bg-black-100",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      <div className="flex justify-center relative my-8 md:my-12 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md shadow-[0_0_20px_rgba(203,172,249,0.15)] hover:border-purple/50 transition-all duration-300 max-w-[92vw] text-center cursor-default"
          >
            <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple/20 text-purple text-[9px] sm:text-[10px] shrink-0">
              <FaTerminal />
            </span>
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple uppercase font-mono text-center">
              Architecting Robust Backends &amp; Cloud Infrastructure
            </span>
          </motion.div>

          <TextGenerateEffect
            duration={3}
            filter={false}
            words="Engineering Scalable Systems from Backend to Modern Web"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl"
          >
            Hi👋! I&apos;m Goodnews, a Fullstack Engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto"
              whileHover={{ y: -2, transition: { duration: 0.18, ease: "easeOut" } }}
              whileTap={{ scale: 0.98 }}
            >
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                containerClassName="w-full sm:w-60"
              />
            </motion.a>

            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, transition: { duration: 0.18, ease: "easeOut" } }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex h-12 w-full sm:w-60 overflow-hidden rounded-lg p-px focus:outline-none transition-transform"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
                <IoDocumentTextOutline className="text-purple text-lg" />
                View Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Top Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <span className="text-xs text-white-200/50 font-mono mr-1">Connect:</span>
            {socialMedia.map((info) => (
              <motion.a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                key={info.id}
                aria-label="Link to social profile"
                whileHover={{ y: -2, scale: 1.08, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex justify-center items-center backdrop-blur-md bg-black-200/80 rounded-xl border border-white/10 hover:border-purple/50 hover:bg-purple/10 text-white-200 hover:text-white transition-colors duration-200 shadow-sm"
              >
                <img src={info.img} alt="social icon" width={16} height={16} className="opacity-80 hover:opacity-100" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
