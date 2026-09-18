"use client";

import ContactForm from "./ContactForm";
import { navItems, socialMedia } from "@/data";
import { SectionReveal } from "./ui/section-reveal";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-12 md:pb-20 relative overflow-hidden" id="contact">
      <SectionReveal offset={16}>
        <div className="flex flex-col items-center text-center">
        <span className="uppercase tracking-widest text-xs font-semibold px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 text-purple mb-4">
          Contact & Inquiries
        </span>
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h2>
        <p className="text-white-200 md:mt-4 my-3 text-center text-sm md:text-base max-w-lg">
          Reach out today to discuss custom web development, landing pages, or fullstack solutions.
        </p>

        {/* Working Contact Form */}
        <ContactForm />
      </div>

      {/* Quick navigation and copyright bar */}
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="md:text-sm text-xs font-light text-white-200">
            Copyright © {new Date().getFullYear()} <span className="text-purple font-medium">Goodnews Azonubi</span>
          </p>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <p className="text-xs text-white-200/60 font-light">Backend &amp; DevOps Engineer • Fullstack Developer</p>
        </div>

        {/* Quick nav links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white-200">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              whileHover={{ y: -1, color: "#CBACF9", transition: { duration: 0.15 } }}
              className="hover:text-purple transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Social media links */}
        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <motion.a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={info.id}
              aria-label={`Link to social profile`}
              whileHover={{ y: -2, scale: 1.08, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex justify-center items-center backdrop-blur-lg bg-black-200/80 rounded-xl border border-white/10 hover:border-purple/50 hover:bg-purple/10 transition-colors duration-200 shadow-sm"
            >
              <img src={info.img} alt="social icon" width={18} height={18} />
            </motion.a>
          ))}
        </div>
      </div>
      </SectionReveal>
    </footer>
  );
};

export default Footer;