"use client";

import React, { useState } from "react";
import { services } from "@/data";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { ContactModal } from "./ui/contact-modal";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenModal = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="services" className="py-24 w-full relative">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="uppercase tracking-widest text-xs font-semibold px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 text-purple mb-4">
          Services & Capabilities
        </span>
        <h2 className="heading max-w-2xl">
          How I can <span className="text-purple">help you</span> succeed
        </h2>
        <p className="text-white-200 mt-4 max-w-xl text-sm md:text-base">
          Tailored backend, DevOps, and fullstack engineering solutions designed to elevate your product, ensure high performance, and drive tangible business results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group rounded-3xl border border-white/10 bg-black-200/60 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-purple/50 hover:shadow-[0_0_30px_rgba(203,172,249,0.15)] overflow-hidden"
          >
            {/* Top gradient highlight on hover */}
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple/15 text-purple border border-purple/20">
                  {service.badge}
                </span>
                <span className="text-xs text-white-200/50 font-mono">
                  0{service.id}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-purple/90 font-medium mt-1">
                {service.tagline}
              </p>

              <p className="text-white-200 text-sm mt-4 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white-100 mb-3">
                  Key Deliverables
                </p>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white-200">
                      <span className="mt-1 h-3.5 w-3.5 rounded-full bg-purple/20 border border-purple/40 flex items-center justify-center shrink-0">
                        <FaCheck className="h-2 w-2 text-purple" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleOpenModal(service.title)}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple hover:text-white transition-colors duration-200 group/link cursor-pointer"
              >
                <span>Get in touch</span>
                <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </button>
              <span className="text-xs text-white-200/40">Available for projects</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-5 p-6 rounded-2xl border border-white/10 bg-black-200/40 backdrop-blur-md max-w-2xl mx-auto text-center md:text-left">
        <p className="text-sm md:text-base text-white-100 font-medium max-w-sm">
          Have a custom project or unique technical requirements?
        </p>
        <div className="w-full md:w-auto shrink-0">
          <MagicButton
            title="Let's build together"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => handleOpenModal("Custom Project / Consultation")}
            containerClassName="w-full md:w-56"
          />
        </div>
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedService}
      />
    </section>
  );
};

export default Services;
