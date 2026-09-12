"use client";

import ContactForm from "./ContactForm";
import { navItems, socialMedia } from "@/data";
import { SectionReveal } from "./ui/section-reveal";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-12 md:pb-20 relative overflow-hidden" id="contact">
      <SectionReveal>
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
            <a
              key={item.name}
              href={item.link}
              className="hover:text-purple transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social media links */}
        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={info.id}
              aria-label={`Link to social profile`}
              className="w-10 h-10 flex justify-center items-center backdrop-blur-lg bg-black-200/80 rounded-xl border border-white/10 hover:border-purple/50 hover:bg-purple/10 transition-all duration-200 active:scale-95"
            >
              <img src={info.img} alt="social icon" width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
      </SectionReveal>
    </footer>
  );
};

export default Footer;