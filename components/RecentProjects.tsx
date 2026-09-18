"use client";

import React from "react";
import { projects } from "@/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SectionReveal, StaggerItem } from "./ui/section-reveal";
import { motion } from "motion/react";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 w-full relative">
      <SectionReveal direction="up" offset={16}>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="uppercase tracking-widest text-xs font-semibold px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 text-purple mb-4">
            Featured Work
          </span>
          <h2 className="heading max-w-2xl">
            A small selection of <span className="text-purple">recent projects</span>
          </h2>
          <p className="text-white-200 mt-4 max-w-xl text-sm md:text-base font-light">
            Real-world applications crafted with modern frontend architecture, interactive animations, and responsive design.
          </p>
        </div>
      </SectionReveal>

      {/* Agency-style Card Grid with independent row reveals for smooth scrolling */}
      <SectionReveal stagger staggerDelay={0.08} className="mt-14 sm:mt-16 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {projects.map(({ id, title, des, img, iconLists, link }, index) => {
            const displayLink = link.startsWith("http")
              ? link
              : `https://${link.replace(/^\/+/, "")}`;

            return (
              <StaggerItem
                key={id}
                direction={index % 2 === 0 ? "left" : "right"}
                offset={18}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.18, ease: "easeOut" } }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-black-200/50 backdrop-blur-xl p-6 sm:p-7 transition-colors duration-200 hover:border-purple/50 hover:shadow-[0_0_35px_rgba(203,172,249,0.18)] overflow-hidden h-full"
                >
                  {/* Top gradient highlight on hover */}
                  <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Visual Thumbnail Window */}
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#13162D] border border-white/10 mb-6 flex items-center justify-center">
                      <img
                        src="/bg.png"
                        alt="card backdrop"
                        loading="lazy"
                        decoding="async"
                        width={464}
                        height={300}
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        width={464}
                        height={300}
                        className="z-10 absolute bottom-0 max-h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 z-20">
                        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-purple">
                          0{id}
                        </span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple transition-colors duration-200 line-clamp-1">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-white-200 text-sm mt-3 line-clamp-2 leading-relaxed font-light">
                      {des}
                    </p>
                  </div>

                  {/* Bottom Action & Tech Stack Bar */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                    {/* Tech Icons Stack */}
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -3, scale: 1.15, transition: { duration: 0.15 } }}
                          className="border border-white/20 rounded-full bg-black-100 w-9 h-9 flex justify-center items-center shrink-0 shadow-md"
                          style={{
                            transform: `translateX(-${index * 8}px)`,
                            zIndex: iconLists.length - index,
                          }}
                          title="Tech tool"
                        >
                          <img
                            src={icon}
                            alt="tech icon"
                            loading="lazy"
                            decoding="async"
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Live Link Button */}
                    <motion.a
                      href={displayLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live site for ${title}`}
                      whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple group-hover:text-white px-4 py-2 rounded-full bg-purple/10 hover:bg-purple/25 border border-purple/30 transition-colors duration-200 shrink-0"
                    >
                      <span>Live Site</span>
                      <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
};

export default RecentProjects;
