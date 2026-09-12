"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { SectionReveal, StaggerItem } from "./ui/section-reveal";

const Clients = () => {
  return (
    <section id="testimonials" className="py-24 w-full relative">
      <SectionReveal stagger staggerDelay={0.15}>
        <StaggerItem direction="up" className="flex flex-col items-center justify-center text-center">
          <span className="uppercase tracking-widest text-xs font-semibold px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 text-purple mb-4">
            Client Feedback
          </span>
          <h2 className="heading max-w-2xl">
            Real results from <span className="text-purple">real collaborations</span>
          </h2>
          <p className="text-white-200 mt-4 max-w-xl text-sm md:text-base font-light">
            Feedback from startup founders, product managers, and engineering leaders who trusted me with their mission-critical architecture.
          </p>
        </StaggerItem>

        <div className="flex flex-col items-center mt-12 w-full">
          <StaggerItem direction="up" offset={20} className="w-full flex flex-col antialiased items-center justify-center relative overflow-hidden py-4">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </StaggerItem>

          <StaggerItem direction="up" offset={20} className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                  />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
                </div>
              </React.Fragment>
            ))}
          </StaggerItem>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Clients;