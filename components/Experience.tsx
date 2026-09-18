"use client";

import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";
import { SectionReveal, StaggerItem } from "./ui/section-reveal";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <SectionReveal stagger staggerDelay={0.08}>
        <StaggerItem>
          <h1 className="heading">
            My <span className="text-purple">work experience</span>
          </h1>
        </StaggerItem>

        <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
          {workExperience.map((card, index) => {
            // Direction based on 2-column layout: left column from left, right column from right
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <StaggerItem
                key={card.id}
                direction={direction}
                offset={18}
                className="h-full flex"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="h-full w-full flex"
                >
                  <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                      borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        width={128}
                        height={128}
                        className="lg:w-32 md:w-20 w-16 object-contain"
                      />
                      <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                          {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Button>
                </motion.div>
              </StaggerItem>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
};

export default Experience;